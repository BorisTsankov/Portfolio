export type Stat = {
  label: string
  value: string
}

export type Project = {
  title: string
  subtitle: string
  description: string
  stack: string[]
  link?: string
  github?: string
  demo?: string
}

export type SkillGroup = {
  title: string
  items: string[]
}