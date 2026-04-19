import type { Project } from '../types'

export const liveProjects: Project[] = [
  {
    title: 'MealPulse',
    subtitle: 'AI-powered calorie tracking web app',
    description:
      'A full-stack nutrition tracking app with barcode scanning, manual food logging, AI-based meal logging, and personalized calorie goals for weight gain, loss, or maintenance. Deployed on Fontys servers.',
    stack: ['ASP.NET MVC', 'C#', 'MSSQL', 'Bootstrap', 'JavaScript', 'OpenAI API'],
    link: 'https://i547859.luna.fhict.nl',
    github: 'https://github.com/BorisTsankov/MealPulse'
  },
  {
    title: 'HousingHelper',
    subtitle: 'Housing aggregation and alert platform',
    description:
      'A full-stack housing platform that scrapes listings, lets users define matching criteria, sends notifications for new results, and visualizes available properties on an interactive map. Includes a complete CI/CD pipeline with Docker-based deployment to Raspberry Pi and public hosting through Cloudflare.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker', 'GitLab CI/CD', 'Cloudflare'],
    link: 'https://housinghelper-ip.com',
    github: 'https://github.com/BorisTsankov/HousingHelper'
  },
]

export const featuredProjects: Project[] = [
  {
    title: 'NERA',
    subtitle: 'Event management platform for CGI',
    description:
      'A group project built for CGI featuring event registration, Auth0 authentication, Stripe payments, QR-based check-in, and organizer management. I contributed as team leader, and the platform was deployed on Azure.',
    stack: ['ASP.NET MVC', 'C#', 'MSSQL', 'Auth0', 'Stripe', 'Azure'],
    github: 'https://github.com/BorisTsankov/Nera'
  },
  {
    title: 'BAS Insights',
    subtitle: 'Sales analytics dashboard with AI recommendations',
    description:
      'A business dashboard developed with BAS World to visualize company growth, sales performance, country-based trends, and employee results. I was Scrum Master and integrated the OpenAI-powered insights and chatbot.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'OpenAI API'],
    github: 'https://github.com/BorisTsankov/BAS-Insights'
  },
]