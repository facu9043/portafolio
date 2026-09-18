import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TerminalTagProps {
  children: ReactNode
  className?: string
}

export function TerminalTag({ children, className }: TerminalTagProps) {
  return (
    <p className={cn('font-mono text-sm text-ink/70', className)}>
      <span className="text-pink">{'>'}</span> {children}
    </p>
  )
}
