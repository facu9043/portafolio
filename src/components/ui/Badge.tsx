import type { HTMLAttributes, ReactNode } from 'react'
import type { IconType } from 'react-icons'
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
  icon?: IconType
  iconColor?: string
}

export function Badge({
  children,
  accent = 'white',
  icon: Icon,
  iconColor,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border-2 border-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-tight',
        accentBg[accent],
        className,
      )}
      {...props}
    >
      {Icon && (
        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center border-2 border-ink bg-white">
          <Icon size={12} style={iconColor ? { color: iconColor } : undefined} aria-hidden="true" />
        </span>
      )}
      {children}
    </span>
  )
}
