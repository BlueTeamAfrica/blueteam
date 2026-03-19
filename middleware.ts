import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";

  const isPortalDomain = host.startsWith("portal.");

  // If portal domain, force all traffic to /portal
  if (isPortalDomain) {
    if (!url.pathname.startsWith("/portal")) {
      url.pathname = `/portal${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // If NOT portal domain, block /portal access
  if (!isPortalDomain && url.pathname.startsWith("/portal")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
