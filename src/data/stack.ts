import type { IconType } from 'react-icons'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaAws,
  FaCloud,
  FaGitAlt,
  FaCogs,
} from 'react-icons/fa'
import { SiTypescript, SiDotnet, SiSpringboot, SiCloudflare } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { VscAzure } from 'react-icons/vsc'

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
      { name: 'ASP.NET', icon: SiDotnet },
      { name: 'C#', icon: TbBrandCSharp },
      { name: 'Python', icon: FaPython },
      { name: 'Java Spring Boot', icon: SiSpringboot },
    ],
  },
  {
    title: 'Cloud & Deployment',
    description:
      'Deploying applications to practical environments with real infrastructure and delivery considerations.',
    items: [
      { name: 'Raspberry Pi + Cloudflare', icon: SiCloudflare },
      { name: 'Azure', icon: VscAzure },
      { name: 'AWS', icon: FaAws },
    ],
  },
  {
  title: 'Workflow',
  description:
    'Improving development speed and reliability through automation and structured delivery practices.',
  items: [
    { name: 'CI/CD', icon: FaCogs },
    { name: 'Git', icon: FaGitAlt },
  ],
},
]