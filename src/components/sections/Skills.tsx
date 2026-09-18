import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import { revealContainer, revealItem, scrollRevealProps } from '../../hooks/useScrollReveal'
import { Badge } from '../ui/Badge'
import { TerminalTag } from '../ui/TerminalTag'

const accents = ['yellow', 'lime', 'cyan', 'pink'] as const

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <TerminalTag>ls ./skills</TerminalTag>
      <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Stack técnico</h2>

      <motion.div
        variants={revealContainer}
        {...scrollRevealProps}
        className="mt-8 grid gap-6 sm:grid-cols-2"
      >
        {skills.map((group, i) => (
          <motion.div key={group.category} variants={revealItem}>
            <h3 className="mb-3 font-display text-lg font-bold">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} accent={accents[i % accents.length]}>
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
