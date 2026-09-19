import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

const accentBg = {
  cream: 'bg-cream',
  yellow: 'bg-yellow',
  lime: 'bg-lime',
  cyan: 'bg-cyan',
  pink: 'bg-pink',
  white: 'bg-white',
} as const

type ConflictingHandlers =
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'

interface NeoCardProps extends Omit<HTMLAttributes<HTMLDivElement>, ConflictingHandlers> {
  children: ReactNode
  accent?: keyof typeof accentBg
  tilt?: number
  interactive?: boolean
}

export const NeoCard = forwardRef<HTMLDivElement, NeoCardProps>(function NeoCard(
  { children, accent = 'white', tilt = 0, interactive = true, className, ...props },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      className={cn('border-[3px] border-ink shadow-neo', accentBg[accent], className)}
      style={{ rotate: tilt }}
      whileHover={
        interactive ? { x: -2, y: -2, rotate: 0, boxShadow: '6px 6px 0px 0px #000' } : undefined
      }
      transition={{ duration: 0.15, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
})
