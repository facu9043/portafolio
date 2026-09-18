export interface Project {
  title: string
  description: string
  stack: string[]
  github: string
  demo?: string
  accent: 'yellow' | 'lime' | 'cyan' | 'pink'
}

export const projects: Project[] = [
  {
    title: 'Carta Digital & Pedidos QR',
    description:
      'Sistema de menú digital y pedidos por mesa para restaurantes: panel de cocina, panel de mozos y personalización visual por local.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/facu9043/menusky',
    accent: 'yellow',
  },
  {
    title: 'Automatización de Gestiones (Apps Script)',
    description:
      'Suite de automatizaciones en Google Apps Script para seguimiento de proyectos, control de horarios y generación de reportes.',
    stack: ['Google Apps Script', 'Google Workspace API', 'Looker Studio'],
    github: 'https://github.com/facu9043',
    accent: 'lime',
  },
  {
    title: 'Próximo proyecto',
    description: 'Este espacio está reservado para el próximo proyecto real en desarrollo.',
    stack: ['Python', 'Ciberseguridad'],
    github: 'https://github.com/facu9043',
    accent: 'cyan',
  },
]
