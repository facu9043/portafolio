export interface ExperienceItem {
  role: string
  place: string
  period: string
  description: string
}

export interface EducationItem {
  title: string
  institution: string
  status: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Desarrollador Web Full Stack Junior',
    place: 'Freelance',
    period: '2026 - Presente',
    description:
      'Desarrollo de aplicaciones a medida y automatizaciones de flujos con Python y Google Apps Script.',
  },
  {
    role: 'Control de Operaciones',
    place: 'Apex America',
    period: '2024 - Presente',
    description: 'Planificación, análisis de datos y creación de automatizaciones operativas.',
  },
  {
    role: 'Customer Service',
    place: 'Personal Flow',
    period: '2019 - 2024',
    description: 'Soporte técnico, resolución de incidencias bajo presión y atención.',
  },
]

export const education: EducationItem[] = [
  {
    title: 'Licenciatura en Ciberdefensa',
    institution: 'FADENA',
    status: 'Cursando',
  },
  {
    title: 'Gestión de la Ciberseguridad',
    institution: 'UTN',
    status: 'Finalizado',
  },
]

export const certifications: string[] = [
  'Python Institute (PCEP - 1 y 2)',
  'Introducción a la Ciberseguridad',
  'Hacker Ético',
  'Linux Unhatched',
  'Redes y Configuración',
]
