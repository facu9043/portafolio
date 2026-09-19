import type { ReactNode } from 'react'

interface CornerRibbonProps {
  children: ReactNode
}

export function CornerRibbon({ children }: CornerRibbonProps) {
  return (
    <div
      className="pointer-events-none absolute -right-[46px] top-[22px] z-20 w-[170px] rotate-45 border-y-2 border-ink bg-red-600 py-1 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-cream"
      style={{ boxShadow: '0 2px 0 0 #000' }}
    >
      {children}
    </div>
  )
}
