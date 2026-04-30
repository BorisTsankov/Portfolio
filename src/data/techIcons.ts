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
import { FaMicrochip } from 'react-icons/fa6'
import {
  SiTypescript,
  SiDotnet,
  SiSpringboot,
  SiCloudflare,
  SiPostgresql,
  SiFastapi,
  SiAuth0,
  SiStripe,
  SiSupabase,
  SiOpenai,
  SiJavascript,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { VscAzure } from 'react-icons/vsc'
import { CgVercel } from 'react-icons/cg'

export const techIcons: Record<string, IconType> = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,

  'ASP.NET MVC': SiDotnet,
  'ASP.NET Core': SiDotnet,
  CSharp: TbBrandCSharp,
  'C#': TbBrandCSharp,
  Python: FaPython,
  FastAPI: SiFastapi,
  'Spring Boot': SiSpringboot,

  PostgreSQL: SiPostgresql,
  MSSQL: FaDatabase,

  Docker: FaDocker,
  'Raspberry Pi': FaMicrochip,
  Cloudflare: SiCloudflare,
  Azure: VscAzure,
  AWS: FaAws,
  Vercel: CgVercel,

  Git: FaGitAlt,
  'GitLab CI/CD': FaCogs,
  'CI/CD': FaCogs,

  Auth0: SiAuth0,
  Stripe: SiStripe,
  OpenAI: SiOpenai,
  'OpenAI API': SiOpenai,
  Supabase: SiSupabase,
}