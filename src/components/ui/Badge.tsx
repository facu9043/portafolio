import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

const accentBg = {
  yellow: 'bg-yellow',
  lime: 'bg-lime',
  cyan: 'bg-cyan',
  pink: 'bg-pink',
  white: 'bg-white',
} as const

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  accent?: keyof typeof accentBg
}

export function Badge({ children, accent = 'white', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block border-2 border-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-tight',
        accentBg[accent],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
