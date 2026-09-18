import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { certifications, education, experience } from '../../data/experience'
import { revealContainer, revealItem, scrollRevealProps } from '../../hooks/useScrollReveal'
import { Badge } from '../ui/Badge'
import { StickerTitle } from '../ui/StickerTitle'
import { TerminalTag } from '../ui/TerminalTag'

function TimelineColumn({
  title,
  command,
  accent,
  rotate,
  children,
}: {
  title: string
  command: string
  accent: 'yellow' | 'lime' | 'cyan' | 'pink'
  rotate: number
  children: ReactNode
}) {
  return (
    <div>
      <TerminalTag>{command}</TerminalTag>
      <StickerTitle accent={accent} rotate={rotate} className="mt-3 mb-6">
        <h3 className="font-display text-2xl font-bold">{title}</h3>
      </StickerTitle>

      <motion.div variants={revealContainer} {...scrollRevealProps} className="relative pl-6">
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
          className="absolute left-0 top-1 h-full w-[3px] bg-ink"
        />
        <div className="flex flex-col gap-8">{children}</div>
      </motion.div>
    </div>
  )
}

function TimelineNode({
  title,
  subtitle,
  period,
  description,
}: {
  title: string
  subtitle: string
  period: string
  description?: string
}) {
  return (
    <motion.div variants={revealItem} className="relative">
      <span className="absolute -left-[27px] top-1 h-4 w-4 border-2 border-ink bg-yellow" />
      <p className="font-mono text-xs text-ink/60">{period}</p>
      <h4 className="font-display text-lg font-bold">{title}</h4>
      <p className="font-mono text-sm text-ink/70">{subtitle}</p>
      {description && <p className="mt-1 text-sm text-ink/80">{description}</p>}
    </motion.div>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <TimelineColumn title="Experiencia" command="cat experiencia.log" accent="lime" rotate={-1.5}>
          {experience.map((item) => (
            <TimelineNode
              key={item.role + item.place}
              title={item.role}
              subtitle={item.place}
              period={item.period}
              description={item.description}
            />
          ))}
        </TimelineColumn>

        <TimelineColumn title="Educación" command="cat educacion.log" accent="cyan" rotate={1.5}>
          {education.map((item) => (
            <TimelineNode
              key={item.title}
              title={item.title}
              subtitle={item.institution}
              period={item.status}
            />
          ))}

          <motion.div variants={revealItem} className="relative">
            <span className="absolute -left-[27px] top-1 h-4 w-4 border-2 border-ink bg-cyan" />
            <p className="font-display text-lg font-bold">Certificaciones</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <Badge key={cert} accent="cyan">
                  {cert}
                </Badge>
              ))}
            </div>
          </motion.div>
        </TimelineColumn>
      </div>
    </section>
  )
}
