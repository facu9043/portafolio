import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { cn } from '../../lib/cn'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#timeline', label: 'trayectoria' },
  { href: '#projects', label: 'proyectos' },
  { href: '#contact', label: 'contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-50 border-b-[3px] border-ink bg-cream/95 backdrop-blur transition-shadow duration-200',
        scrolled && 'shadow-neo-sm',
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a href="#top" className="font-mono text-base font-bold sm:text-lg">
          ~/facundo
        </a>

        <ul className="hidden items-center gap-6 font-mono text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:underline hover:decoration-2 hover:underline-offset-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-3 py-1.5 font-mono text-xs font-bold text-cream shadow-neo-sm transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 sm:text-sm"
        >
          <Download size={14} aria-hidden="true" />
          CV
        </a>
      </nav>

      <ul className="flex gap-4 overflow-x-auto border-t border-ink/10 px-4 py-2 font-mono text-xs md:hidden">
        {links.map((link) => (
          <li key={link.href} className="shrink-0">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </motion.header>
  )
}
