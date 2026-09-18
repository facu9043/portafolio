import { useEffect, type ReactNode, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { profile } from '../../data/profile'
import { LinkedinGlyph } from '../ui/icons'

interface FloatingItem {
  href: string
  label: string
  icon: (props: { size?: number; className?: string }) => ReactNode
  accent: string
}

const items: FloatingItem[] = [
  {
    href: profile.whatsapp,
    label: 'Escribir por WhatsApp',
    icon: MessageCircle,
    accent: 'bg-lime',
  },
  {
    href: profile.linkedin,
    label: 'Ver LinkedIn',
    icon: LinkedinGlyph,
    accent: 'bg-cyan',
  },
]

export function FloatingContact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <AnimatePresence>
        {visible &&
          items.map(({ href, label, icon: Icon, accent }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.08 }}
              className={`relative flex h-12 w-12 items-center justify-center border-[3px] border-ink ${accent} shadow-neo transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5`}
            >
              <span className="absolute inset-0 animate-ping rounded-none border-2 border-ink/40" />
              <Icon size={20} className="text-ink" />
            </motion.a>
          ))}
      </AnimatePresence>
    </div>
  )
}
