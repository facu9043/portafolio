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
    title: 'MenuSky',
    description:
      'Carta digital y pedidos por QR para restaurantes: los clientes piden desde la mesa, con panel de cocina, panel de mozos y personalización visual por local.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/facu9043/menusky',
    demo: 'https://www.menusky.com.ar/',
    image: '/projects/menusky-logo.png',
    accent: 'yellow',
  },
  {
    title: 'Automatización de Gestiones (Apps Script)',
    description:
      'Web app sobre Google Workspace que automatiza tareas administrativas: seguimiento de proyectos, control de horarios y reportes generados a partir de Google Sheets.',
    stack: ['Google Apps Script', 'Google Sheets', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/facu9043',
    demo: 'https://script.google.com/macros/s/AKfycbzVN9haBzB9RxqKt3ZvcMeMtEaKEtpRRzvExyv29u8k9AaNgnI8Y7C2QNsFF9uRtWis/exec',
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
  {
    title: 'Ocani',
    description:
      'Catálogo mayorista de dietética online: filtros por categoría, presentación, precio y stock, más carrito de compra.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/facu9043/ocani-web',
    demo: 'https://ocani-web.vercel.app/catalogo',
    image: '/projects/ocani-logo.png',
    accent: 'yellow',
  },
]
