import type { IconType } from 'react-icons'
import { SiGoogleappsscript } from 'react-icons/si'

export interface Project {
  title: string
  description: string
  stack: string[]
  github: string
  demo?: string
  image?: string
  icon?: IconType
  iconColor?: string
  accent: 'yellow' | 'lime' | 'cyan' | 'pink'
  inDevelopment?: boolean
}

export const projects: Project[] = [
  {
    title: 'Carta Digital & Pedidos QR',
    description:
      'Sistema de menú digital y pedidos por mesa para restaurantes: panel de cocina, panel de mozos y personalización visual por local.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/facu9043/menusky',
    accent: 'yellow',
    inDevelopment: true,
  },
  {
    title: 'Automatización de Gestiones (Apps Script)',
    description:
      'Suite de automatizaciones en Google Apps Script para seguimiento de proyectos, control de horarios y generación de reportes.',
    stack: ['Google Apps Script', 'Google Workspace API', 'Looker Studio'],
    github: 'https://github.com/facu9043',
    icon: SiGoogleappsscript,
    iconColor: '#4285F4',
    accent: 'lime',
  },
  {
    title: 'Buonstile Indumentaria',
    description:
      'Tienda web de e-commerce. Panel de administración propio para editar precios, stock por talle y fotos de producto.',
    stack: ['React', 'Vite', 'Supabase', 'JavaScript'],
    github: 'https://github.com/facu9043/Buonstile',
    demo: 'https://buonstile.netlify.app/',
    image: '/projects/buonstile-logo.png',
    accent: 'cyan',
  },
  {
    title: 'Producciones Nan',
    description:
      'Catálogo online de panadería y pastelería artesanal, con línea sin TACC y carrito de compra.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/facu9043/producciones-nan',
    demo: 'https://producciones-nan.netlify.app/',
    image: '/projects/producciones-nan-logo.png',
    accent: 'pink',
  },
]
