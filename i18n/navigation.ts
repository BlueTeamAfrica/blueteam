import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Only Link is used; add redirect, usePathname, useRouter or getPathname here when a page needs one
export const { Link } = createNavigation(routing)
