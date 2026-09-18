import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

const variantBg = {
  yellow: 'bg-yellow',
  lime: 'bg-lime',
  cyan: 'bg-cyan',
  pink: 'bg-pink',
  ink: 'bg-ink text-cream',
  white: 'bg-white',
} as const

type Variant = keyof typeof variantBg

const baseClasses =
  'inline-flex items-center justify-center gap-2 border-[3px] border-ink px-5 py-2.5 font-display font-bold shadow-neo transition-transform duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-neo-sm'

interface CommonProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ConflictingHandlers =
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'

type NeoButtonProps =
  | (CommonProps & { as?: 'button' } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        ConflictingHandlers
      >)
  | (CommonProps & { as: 'a' } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers>)

export function NeoButton({
  children,
  variant = 'yellow',
  className,
  as,
  ...props
}: NeoButtonProps) {
  const classes = cn(baseClasses, variantBg[variant], className)

  if (as === 'a') {
    return (
      <motion.a
        whileTap={{ x: 2, y: 2 }}
        className={classes}
        {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers>)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileTap={{ x: 2, y: 2 }}
      className={classes}
      {...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers>)}
    >
      {children}
    </motion.button>
  )
}
