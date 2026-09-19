import type { IconType } from 'react-icons'
import {
  SiBurpsuite,
  SiClaude,
  SiCss,
  SiGit,
  SiGnubash,
  SiGoogle,
  SiGoogleappsscript,
  SiGoogledrive,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiLooker,
  SiMetasploit,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOwasp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiWireshark,
} from 'react-icons/si'
import { TbBrandVscode, TbRadar2 } from 'react-icons/tb'

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
      { name: 'Google Apps Script', icon: SiGoogleappsscript, color: '#4285F4' },
      { name: 'Google Workspace API', icon: SiGoogle, color: '#4285F4' },
      { name: 'Looker Studio', icon: SiLooker, color: '#4285F4' },
      { name: 'n8n', icon: SiN8N, color: '#EA4B71' },
    ],
  },
  {
    category: 'Ciberseguridad y Redes',
    items: [
      { name: 'Linux', icon: SiLinux, color: '#000000' },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
      { name: 'Nmap', icon: TbRadar2, color: '#22C55E' },
      { name: 'Wireshark', icon: SiWireshark, color: '#1679A7' },
      { name: 'Burp Suite', icon: SiBurpsuite, color: '#FF6633' },
      { name: 'Metasploit', icon: SiMetasploit, color: '#2596CD' },
      { name: 'OWASP ZAP', icon: SiOwasp, color: '#000000' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC' },
      { name: 'Gemini', icon: SiGooglegemini, color: '#8E75B2' },
      { name: 'Claude', icon: SiClaude, color: '#D97757' },
      { name: 'Google Workspace', icon: SiGoogledrive, color: '#4285F4' },
    ],
  },
]
