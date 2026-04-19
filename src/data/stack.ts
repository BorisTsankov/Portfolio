import type { IconType } from 'react-icons'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaAws,
  FaGitAlt,
  FaCogs,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiDotnet,
  SiSpringboot,
  SiCloudflare,
  SiPostgresql,
  SiFastapi,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { VscAzure } from 'react-icons/vsc'
import { FaMicrochip } from 'react-icons/fa6'
import { SiAuth0, SiStripe, SiSupabase, SiOpenai } from 'react-icons/si'
import { CgVercel } from 'react-icons/cg'


export type StackItem = {
  name: string
  icon: IconType
}

export type StackGroup = {
  title: string
  description: string
  items: StackItem[]
}

export const stackGroups: StackGroup[] = [
  {
    title: 'Frontend',
    description:
      'Responsive, component-based interfaces focused on clarity, usability, and maintainable structure.',
    items: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
    ],
  },
  {
    title: 'Backend',
    description:
      'Structured application logic, APIs, and server-side systems built for real functionality and growth.',
    items: [
      { name: 'ASP.NET Core', icon: SiDotnet },
      { name: 'C#', icon: TbBrandCSharp },
      { name: 'Python', icon: FaPython },
      { name: 'FastAPI', icon: SiFastapi },

      { name: 'Spring Boot', icon: SiSpringboot },
    ],
  },
  {
    title: 'Databases',
    description:
      'Relational databases used to store, manage, and query application data across full-stack projects.',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MSSQL', icon: FaDatabase }
    ],
  },
  {
    title: 'Infrastructure & Deployment',
    description:
      'Deploying applications with practical infrastructure, containerization, and real delivery workflows.',
    items: [
      { name: 'Docker', icon: FaDocker },
      { name: 'Raspberry Pi', icon: FaMicrochip },
      { name: 'Cloudflare', icon: SiCloudflare },
      { name: 'Azure', icon: VscAzure },
      { name: 'AWS', icon: FaAws },
      { name: 'Vercel', icon: CgVercel },
    ],
  },
  {
    title: 'Workflow',
    description:
      'Improving delivery speed and reliability through version control, automation, and structured deployment workflows.',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'CI/CD', icon: FaCogs },
    ],
  },
  {
  title: 'APIs & Integrations',
  description:
    'Integrating external services for authentication, payments, AI functionality, and backend services.',
  items: [
    { name: 'Auth0', icon: SiAuth0 },
    { name: 'Stripe', icon: SiStripe },
    { name: 'OpenAI', icon: SiOpenai },
    { name: 'Supabase', icon: SiSupabase },
  ],
},
]