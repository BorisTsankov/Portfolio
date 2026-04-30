import type { IconType } from 'react-icons'
import { techIcons } from './techIcons'

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
      { name: 'HTML', icon: techIcons.HTML },
      { name: 'CSS', icon: techIcons.CSS },
      { name: 'JavaScript', icon: techIcons.JavaScript },
      { name: 'TypeScript', icon: techIcons.TypeScript },
      { name: 'React', icon: techIcons.React },
    ],
  },
  {
    title: 'Backend',
    description:
      'Structured application logic, APIs, and server-side systems built for real functionality and growth.',
    items: [
      { name: 'ASP.NET Core', icon: techIcons['ASP.NET Core'] },
      { name: 'C#', icon: techIcons['C#'] },
      { name: 'Python', icon: techIcons.Python },
      { name: 'FastAPI', icon: techIcons.FastAPI },
      { name: 'Spring Boot', icon: techIcons['Spring Boot'] },
    ],
  },
  {
    title: 'Databases',
    description:
      'Relational databases used to store, manage, and query application data across full-stack projects.',
    items: [
      { name: 'PostgreSQL', icon: techIcons.PostgreSQL },
      { name: 'MSSQL', icon: techIcons.MSSQL },
    ],
  },
  {
    title: 'Infrastructure & Deployment',
    description:
      'Deploying applications with practical infrastructure, containerization, and real delivery workflows.',
    items: [
      { name: 'Docker', icon: techIcons.Docker },
      { name: 'Raspberry Pi', icon: techIcons['Raspberry Pi'] },
      { name: 'Cloudflare', icon: techIcons.Cloudflare },
      { name: 'Azure', icon: techIcons.Azure },
      { name: 'AWS', icon: techIcons.AWS },
      { name: 'Vercel', icon: techIcons.Vercel },
    ],
  },
  {
    title: 'Workflow',
    description:
      'Improving delivery speed and reliability through version control, automation, and structured deployment workflows.',
    items: [
      { name: 'Git', icon: techIcons.Git },
      { name: 'CI/CD', icon: techIcons['CI/CD'] },
    ],
  },
  {
    title: 'APIs & Integrations',
    description:
      'Integrating external services for authentication, payments, AI functionality, and backend services.',
    items: [
      { name: 'Auth0', icon: techIcons.Auth0 },
      { name: 'Stripe', icon: techIcons.Stripe },
      { name: 'OpenAI', icon: techIcons.OpenAI },
      { name: 'Supabase', icon: techIcons.Supabase },
    ],
  },
]