'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  menuOpen: boolean
  closeMenu: () => void
  children: ReactNode
}

// Animation wrappers for the mega-menu backdrop and panel.
// Dynamically imported by Header.tsx — keeps the 116K framer-motion bundle
// off the initial page parse and defers it until after mount.
export default function HeaderAnimations({ menuOpen, closeMenu, children }: Props) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40"
            aria-hidden="true"
            onClick={closeMenu}
          />
          <motion.div
            key="panel"
            id="mega-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-0 top-0 z-[45] bg-white shadow-2xl overflow-y-auto"
            style={{ paddingTop: 'calc(39px + 81px)', maxHeight: '100dvh' }}
          >
            <style>{`@media(min-width:768px){#mega-menu-panel{padding-top:calc(32px + 81px)}}`}</style>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
