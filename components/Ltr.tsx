import type { ReactNode } from 'react'

export function Ltr({ children }: { children: ReactNode }) {
  return (
    <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
      {children}
    </span>
  )
}
