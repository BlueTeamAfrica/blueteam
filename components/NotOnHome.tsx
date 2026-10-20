'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

// Renders its (server-rendered) children everywhere except the homepage, / and /ar, which end
// with their own CTA band. usePathname works during SSR, so the HTML is already right.
export default function NotOnHome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return pathname === '/' || pathname === '/ar' ? null : <>{children}</>
}
