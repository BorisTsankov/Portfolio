import type { Project } from '../types'

export const liveProjects: Project[] = [
  {
    title: 'MealPulse',
    subtitle: 'Calorie tracking web app',
    description:
      'A personal project focused on calorie tracking, barcode/manual food logging, and AI-assisted interaction.',
    stack: ['.NET', 'MSSQL', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://i547859.luna.fhict.nl',
    github: 'https://github.com/BorisTsankov/MealPulse'
  },
  {
    title: 'HousingHelper',
    subtitle: 'Housing assistance platform',
    description:
      'A housing web app with listing aggregation, smart search criteria, email alerts, and map-based browsing.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    link: 'https://housinghelper-ip.com',
    github: 'https://github.com/BorisTsankov/HousingHelper'

  },
]

export const featuredProjects: Project[] = [
  {
    title: 'NERA',
    subtitle: 'NEXT event registration platform',
    description:
      'Group project for CGI with event registration, payment flow, QR functionality, deployment work, and accessibility awareness.',
    stack: ['.NET', 'MSSQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'BAS Insights',
    subtitle: 'Dashboard with KPI insights and AI recommendations',
    description:
      'Group project for BAS World where I contributed on both frontend and backend while also taking Scrum Master responsibilities.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
  },
]