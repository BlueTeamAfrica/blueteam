// Sudan's flag as inline SVG (no image request, and no <img> on the page). Official 1:2
// proportions and colours. Decorative: the country name is always next to it.
export function SudanFlag({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 6" aria-hidden="true" focusable="false" className={`shrink-0 rounded-[3px] shadow-[0_0_0_1px_rgba(11,27,43,0.12)] ${className}`}>
      <rect width="12" height="2" fill="#D21034" />
      <rect y="2" width="12" height="2" fill="#FFFFFF" />
      <rect y="4" width="12" height="2" fill="#000000" />
      <path d="M0 0 4 3 0 6Z" fill="#007229" />
    </svg>
  )
}
