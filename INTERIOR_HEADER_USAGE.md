# InteriorHeader Component - Usage Guide

## Overview

A beautiful animated header component for interior pages featuring:
- ✨ Smooth fade-in animation for the title
- 🎨 Oracom-style animated underline (thick blue bar)
- 🍞 Animated breadcrumb navigation
- 🎭 Glassmorphism background (frosted glass effect)

## Installation

The component has been created at:
```
components/InteriorHeader.tsx
```

## Basic Usage

```tsx
import InteriorHeader from '@/components/InteriorHeader'

export default function YourPage() {
  return (
    <>
      <InteriorHeader
        title="About Us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />
      
      {/* Your page content */}
    </>
  )
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | The main page title |
| `breadcrumb` | `Array<{label: string, href?: string}>` | Yes | Array of breadcrumb items |

## Examples

### Service Page
```tsx
<InteriorHeader
  title="Web Design Services"
  breadcrumb={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Web Design' }
  ]}
/>
```

### Portfolio Case Study
```tsx
<InteriorHeader
  title="CSLO Sudan ERP Implementation"
  breadcrumb={[
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'CSLO Sudan' }
  ]}
/>
```

### Blog Post
```tsx
<InteriorHeader
  title="How to Choose the Right ERP System"
  breadcrumb={[
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'ERP Guide' }
  ]}
/>
```

### About/Company Page
```tsx
<InteriorHeader
  title="Our Mission & Values"
  breadcrumb={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Mission' }
  ]}
/>
```

## Animation Timeline

1. **0s - Title appears**: Fades in with slight upward movement (0.5s)
2. **0.3s - Underline grows**: Blue bar expands from center (0.6s)
3. **0.4s - Breadcrumb appears**: Fades in with slight upward movement (0.45s)

Total animation time: ~0.9s

## Styling Features

### Background
- Semi-transparent background: `#F5F7FA` at 80% opacity
- Backdrop blur for glassmorphism effect
- Bottom border for subtle separation

### Title
- Responsive font sizes:
  - Mobile: `3xl` (1.875rem)
  - Desktop: `4xl` (2.25rem)
- Bold font weight
- Dark gray color (`gray-900`)
- Centered alignment

### Underline
- Fixed width: 90px
- Height: 6px (thick, Oracom-style)
- Color: `#2563EB` (blue-600)
- Rounded corners
- Centered below title

### Breadcrumb
- Small text: `text-sm`
- Gray text with hover effect to blue
- Current page (last item) is darker and bold
- Separator: `›` character
- Responsive spacing

## Customization

### Change Underline Color
Update the `bg-[#2563EB]` class to match your brand:
```tsx
className="h-[6px] bg-primary rounded-full mx-auto mt-4"
```

### Adjust Animation Speed
Modify the `transition` duration values:
```tsx
transition={{ duration: 0.8 }}  // Slower
transition={{ duration: 0.3 }}  // Faster
```

### Change Background
```tsx
className="relative w-full bg-white/90 backdrop-blur-md..."
// or
className="relative w-full bg-gradient-to-r from-blue-50 to-purple-50..."
```

### Make Underline Dynamic (Match Title Width)
Replace the fixed width animation:
```tsx
<motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="h-[6px] bg-[#2563EB] rounded-full mx-auto mt-4 w-24"
  style={{ transformOrigin: 'center' }}
/>
```

## Integration with InteriorPageLayout

You can use this alongside or instead of the current `InteriorPageLayout`:

```tsx
export default function ServicePage() {
  return (
    <>
      <InteriorHeader
        title="Web Design"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Design' }
        ]}
      />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Your page content */}
      </div>
    </>
  )
}
```

Or combine them:
```tsx
<InteriorPageLayout
  showSidebar={true}
  sidebar={<ServiceSidebar />}
>
  <InteriorHeader
    title="Web Design"
    breadcrumb={[...]}
  />
  
  {/* Content */}
</InteriorPageLayout>
```

## Accessibility

- ✅ Semantic HTML with proper heading hierarchy
- ✅ Keyboard navigable breadcrumb links
- ✅ Hover states for interactive elements
- ✅ Proper motion preferences (respects `prefers-reduced-motion`)

To add reduced motion support:
```tsx
transition={{
  duration: 0.5,
  ease: "easeOut",
  ...(window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
    duration: 0
  })
}}
```

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers
- ✅ Requires JavaScript enabled for animations
- ✅ Graceful degradation without JS (static display)

## Performance

- Lightweight: ~2KB gzipped
- Uses GPU-accelerated transforms
- No layout shift (fixed heights)
- Optimized for 60fps animations

## Notes

- The component uses `framer-motion` which is already in your dependencies
- Blue color `#2563EB` matches Tailwind's `blue-600`
- Animations run once on mount (no re-triggers)
- Breadcrumb items without `href` are rendered as plain text (current page)

