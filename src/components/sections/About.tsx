import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { revealItem, scrollRevealProps } from '../../hooks/useScrollReveal'
import { NeoCard } from '../ui/NeoCard'
import { TerminalTag } from '../ui/TerminalTag'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <motion.div variants={revealItem} {...scrollRevealProps}>
        <TerminalTag>cat about.txt</TerminalTag>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Sobre mí</h2>

        <NeoCard accent="cream" interactive={false} className="mt-6 p-6 sm:p-8">
          <p className="font-mono text-sm leading-relaxed sm:text-base">{profile.bio}</p>
        </NeoCard>
      </motion.div>
    </section>
  )
}
