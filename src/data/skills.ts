export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Lenguajes y Core',
    items: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Automatización y Cloud',
    items: ['Google Apps Script', 'Google Workspace API', 'Looker Studio'],
  },
  {
    category: 'Bases de Datos y Datos',
    items: ['Microsoft Excel Avanzado', 'Dashboards', 'Análisis de datos'],
  },
  {
    category: 'Ciberseguridad y Redes',
    items: ['Fundamentos de Redes', 'Linux', 'Ethical Hacking (Cisco Certified)'],
  },
  {
    category: 'Desarrollo asistido',
    items: ['Herramientas de IA para programación'],
  },
]
