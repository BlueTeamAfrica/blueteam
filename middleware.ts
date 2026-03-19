import { NextRequest, NextResponse } from "next/server";

/**
 * Root app middleware (marketing site).
 * Portal routes live in the separate blueteam-portal app; portal-domain routing
 * is handled by deployment (e.g. portal subdomain → portal app). No rewrite/block here.
 */
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
