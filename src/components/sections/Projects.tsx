import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import { revealContainer, revealItem, scrollRevealProps } from '../../hooks/useScrollReveal'
import { Badge } from '../ui/Badge'
import { CornerRibbon } from '../ui/CornerRibbon'
import { GithubGlyph } from '../ui/icons'
import { NeoCard } from '../ui/NeoCard'
import { StickerTitle } from '../ui/StickerTitle'
import { TerminalTag } from '../ui/TerminalTag'

const tilts = [-1.5, 1.5, -1]

const headerAccent = {
  yellow: 'bg-yellow',
  lime: 'bg-lime',
  cyan: 'bg-cyan',
  pink: 'bg-pink',
} as const

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <TerminalTag>ls ./proyectos</TerminalTag>
      <StickerTitle accent="lime" rotate={-2} className="mt-3">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Proyectos</h2>
      </StickerTitle>

      <motion.div
        variants={revealContainer}
        {...scrollRevealProps}
        className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, i) => (
          <motion.div key={project.title} variants={revealItem}>
            <NeoCard
              accent="white"
              tilt={tilts[i % tilts.length]}
              className={`relative flex h-full flex-col ${project.inDevelopment ? 'overflow-hidden' : ''}`}
            >
              {project.inDevelopment && <CornerRibbon>Próximamente</CornerRibbon>}

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 border-b-[3px] border-ink px-5 py-4 transition-opacity hover:opacity-90 ${headerAccent[project.accent]}`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt=""
                      className="h-10 w-10 shrink-0 border-2 border-ink bg-white object-cover"
                    />
                  )}
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                </a>
              ) : (
                <div
                  className={`flex items-center gap-3 border-b-[3px] border-ink px-5 py-4 ${headerAccent[project.accent]}`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt=""
                      className="h-10 w-10 shrink-0 border-2 border-ink bg-white object-cover"
                    />
                  )}
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                </div>
              )}

              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="text-sm text-ink/80">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border-2 border-ink bg-ink px-3 py-1.5 font-mono text-xs font-bold text-cream shadow-neo-sm transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                  >
                    <GithubGlyph size={14} />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border-2 border-ink bg-white px-3 py-1.5 font-mono text-xs font-bold shadow-neo-sm transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </NeoCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
