import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { profile } from '../../data/profile'
import { revealItem, scrollRevealProps } from '../../hooks/useScrollReveal'
import { GithubGlyph, LinkedinGlyph } from '../ui/icons'
import { NeoButton } from '../ui/NeoButton'
import { TerminalTag } from '../ui/TerminalTag'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <motion.div
        variants={revealItem}
        {...scrollRevealProps}
        className="border-[3px] border-ink bg-yellow px-6 py-12 text-center shadow-neo-lg sm:px-12"
      >
        <TerminalTag className="text-center text-ink/70">./contactar.sh</TerminalTag>

        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-ink/80 sm:text-base">
          Hablemos sobre cómo puedo ayudarte a construir la herramienta o automatización que tu
          negocio necesita.
        </p>

        {profile.available && (
          <span className="mt-6 inline-flex items-center gap-2 border-2 border-ink bg-cream px-3 py-1 font-mono text-xs font-bold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            Disponible para proyectos
          </span>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <NeoButton
            as="a"
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="lime"
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </NeoButton>
          <NeoButton as="a" href={`mailto:${profile.email}`} variant="white">
            <Mail size={16} aria-hidden="true" />
            {profile.email}
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
        </div>
      </motion.div>
    </section>
  )
}
