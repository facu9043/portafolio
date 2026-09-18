import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

const accentBg = {
  yellow: 'bg-yellow',
  lime: 'bg-lime',
  cyan: 'bg-cyan',
  pink: 'bg-pink',
} as const

interface StickerTitleProps {
  children: ReactNode
  accent?: keyof typeof accentBg
  rotate?: number
  className?: string
}

export function StickerTitle({
  children,
  accent = 'yellow',
  rotate = -2,
  className,
}: StickerTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotate * 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      whileHover={{ rotate: 0, scale: 1.04 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      className={cn('inline-block bg-white p-1.5 shadow-neo-lg', className)}
    >
      <div className={cn('border-[3px] border-ink px-5 py-2 sm:px-6 sm:py-3', accentBg[accent])}>
        {children}
      </div>
    </motion.div>
  )
}
