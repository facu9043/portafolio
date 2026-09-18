import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { useTypewriter } from '../../hooks/useTypewriter'
import { GithubGlyph, LinkedinGlyph } from '../ui/icons'
import { NeoButton } from '../ui/NeoButton'
import { TerminalTag } from '../ui/TerminalTag'

export function Hero() {
  const { output } = useTypewriter(`> cat rol.txt\n${profile.role}`, 22, 500)

  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:flex-row md:gap-16 md:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 text-center md:text-left"
      >
        {profile.available && (
          <span className="mb-4 inline-flex items-center gap-2 border-2 border-ink bg-lime px-3 py-1 font-mono text-xs font-bold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            Disponible para proyectos
          </span>
        )}

        <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          {'> '}FACUNDO_BENITEZ
        </h1>

        <div className="mt-4 min-h-16 font-mono text-sm text-ink/80 sm:text-base">
          <pre className="whitespace-pre-wrap font-mono">{output}</pre>
        </div>

        <TerminalTag className="mt-3">{profile.location}</TerminalTag>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <NeoButton
            as="a"
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="lime"
          >
            Hablemos
          </NeoButton>
          <NeoButton as="a" href={`mailto:${profile.email}`} variant="white">
            <Mail size={16} aria-hidden="true" />
            Email
          </NeoButton>
          <NeoButton
            as="a"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="ink"
          >
            <GithubGlyph size={16} />
            GitHub
          </NeoButton>
          <NeoButton
            as="a"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="cyan"
          >
            <LinkedinGlyph size={16} />
            LinkedIn
          </NeoButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        className="shrink-0"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-48 w-48 items-center justify-center border-[3px] border-ink bg-pink shadow-neo-lg sm:h-56 sm:w-56"
        >
          <span className="font-display text-6xl font-bold text-ink">FB</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
