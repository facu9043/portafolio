import type { ReactNode } from 'react'

const variantBg = {
  yellow: 'bg-yellow',
  lime: 'bg-lime',
  cyan: 'bg-cyan',
  pink: 'bg-pink',
  ink: 'bg-ink text-cream',
  white: 'bg-white',
} as const

export interface MarqueeItem {
  label: string
  icon: (props: { size?: number; className?: string }) => ReactNode
  variant: keyof typeof variantBg
}

interface IconMarqueeProps {
  items: MarqueeItem[]
  href: string
  className?: string
}

export function IconMarquee({ items, href, className }: IconMarqueeProps) {
  const track = [...items, ...items, ...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden border-y-[3px] border-ink bg-white ${className ?? ''}`}>
      <div className="animate-marquee flex w-max gap-4 py-3 hover:[animation-play-state:paused]">
        {track.map((item, i) => {
          const Icon = item.icon
          return (
            <a
              key={i}
              href={href}
              className={`inline-flex shrink-0 items-center gap-2 border-2 border-ink px-4 py-2 font-mono text-sm font-bold ${variantBg[item.variant]}`}
            >
              <Icon size={16} />
              {item.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
