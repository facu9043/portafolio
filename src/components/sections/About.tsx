import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../../data/profile'
import { revealItem, scrollRevealProps } from '../../hooks/useScrollReveal'
import { useTypewriter } from '../../hooks/useTypewriter'
import { NeoCard } from '../ui/NeoCard'
import { StickerTitle } from '../ui/StickerTitle'
import { TerminalTag } from '../ui/TerminalTag'

export function About() {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.4 })
  const { output, done } = useTypewriter(profile.bio, 18, 200, isInView)

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <motion.div variants={revealItem} {...scrollRevealProps}>
        <TerminalTag>cat about.txt</TerminalTag>
        <StickerTitle accent="pink" rotate={-2} className="mt-3">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Sobre mí</h2>
        </StickerTitle>

        <NeoCard ref={cardRef} accent="cream" interactive={false} className="mt-6 p-6 sm:p-8">
          <p className="min-h-[6.5rem] font-mono text-sm leading-relaxed sm:min-h-[4.5rem] sm:text-base">
            {output}
            {!done && (
              <span className="ml-0.5 inline-block w-2 animate-pulse bg-ink">{' '}</span>
            )}
          </p>
        </NeoCard>
      </motion.div>
    </section>
  )
}
