import type { IconType } from 'react-icons'
import {
  SiCss,
  SiGit,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiLooker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandVscode, TbNetwork, TbShieldLock } from 'react-icons/tb'

export interface SkillItem {
  name: string
  icon?: IconType
  color?: string
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Lenguajes y Frameworks',
    items: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    category: 'Automatización y Cloud',
    items: [
      { name: 'Google Apps Script', icon: SiGoogle, color: '#4285F4' },
      { name: 'Google Workspace API', icon: SiGoogle, color: '#4285F4' },
      { name: 'Looker Studio', icon: SiLooker, color: '#4285F4' },
    ],
  },
  {
    category: 'Datos y Productividad',
    items: [
      { name: 'Microsoft Excel Avanzado' },
      { name: 'Dashboards' },
      { name: 'Análisis de datos' },
    ],
  },
  {
    category: 'Ciberseguridad y Redes',
    items: [
      { name: 'Fundamentos de Redes', icon: TbNetwork, color: '#0EA5E9' },
      { name: 'Linux', icon: SiLinux, color: '#000000' },
      { name: 'Ethical Hacking (Cisco Certified)', icon: TbShieldLock, color: '#DC2626' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC' },
      { name: 'Herramientas de IA para programación' },
    ],
  },
]
