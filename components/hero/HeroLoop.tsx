'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import s from './hero.module.css'

// Drives the hero's 6-step story (Hero.tsx, HeroStage.tsx) by putting data-* attributes on the
// section; hero.module.css does the rest with CSS transitions. The server renders step 0, so
// the first paint is the real H1. Paused while the tab is hidden or the hero is off screen.
// Reduced motion: no loop, the synced state (step 3) in the page's language.

const STEPS = 6
const STEP_MS = 3000

export default function HeroLoop({ children, className = '', labelledBy }: {
  children: ReactNode
  className?: string
  labelledBy: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [step, setStep] = useState(0)
  // Set once the loop reaches step 3, so Arabic shown at step 4 starts loading its font only then
  const [warm, setWarm] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(3)
      return
    }
    let timer: number | undefined
    let inView = true
    const sync = () => {
      const run = inView && !document.hidden
      if (run && timer === undefined) {
        timer = window.setInterval(() => setStep((n) => (n + 1) % STEPS), STEP_MS)
      } else if (!run && timer !== undefined) {
        window.clearInterval(timer)
        timer = undefined
      }
    }
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting
      sync()
    })
    io.observe(ref.current!)
    document.addEventListener('visibilitychange', sync)
    sync()
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', sync)
      window.clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (step === 3 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) setWarm(true)
  }, [step])

  return (
    <section
      ref={ref}
      aria-labelledby={labelledBy}
      className={`${s.root} ${className}`}
      data-step={step}
      data-offline={step < 2}
      data-synced={step >= 3}
      data-flip={step >= 4}
      data-warm={warm}
    >
      {children}
    </section>
  )
}
