import { Experience } from "../types/ExperienceType";

export const experiences: Experience[] = [
    {
      id:'1',
      jobTitle: 'Lead Tech Front JS/TS',
      companyName: 'Keyrus',
      companyLogo: '/keyrus-logo.png',
      clientLogo: 'richemont.png',
      clientName: 'Richemont',
      startingDate: 'Started 2022-11-15',
      endDate: 'Now',
      summary: [
        'Creation of the technical stack',
        'Technical Lead & Dev of the project',
        'CI/CD though the project',
        'Exteme Programming scheduling'
      ],
      techUsed: [
        {
          src: '/techLogos/Typescript.svg',
          name: 'Typescript'
        },
        {
          src: '/techLogos/Vitejs-logo.png',
          name: 'Vite'
        },
        {
          src: '/techLogos/React-icon.png',
          name: 'React'
        },
        {
          src: '/techLogos/redux-logo.png',
          name: 'Redux'
        },
        {
          src: '/techLogos/Tailwind-logo.png',
          name: 'Tailwind'
        },
        { src: '/techLogos/Docker.png', name: 'Docker' }
      ]
    },
    {
        id:'2',
      jobTitle: 'Full Stack Dev JS/TS',
      companyName: 'Keyrus',
      companyLogo: '/keyrus-logo.png',
      clientLogo: 'totalEnergies.png',
      clientName: 'Total Energies',
      startingDate: 'Started 2021-09-01',
      endDate: 'Ended 2022-10-15',
      summary: [
        'Rework of older JAVA backend into a node TS one',
        'Lead dev of the project',
        'Worked on the CI/CD of the project',
        'TMA of a production website'
      ],
      techUsed: [
        {
          src: '/techLogos/Typescript.svg',
          name: 'Typescript'
        },
        {
          src: '/techLogos/nest.png',
          name: 'nest'
        },
        {
          src: '/techLogos/typeorm.png',
          name: 'typeORM'
        },
        {
          src: '/techLogos/React-icon.png',
          name: 'React'
        },
        {
          src: '/techLogos/redux-logo.png',
          name: 'Redux'
        },
        {
          src: '/techLogos/postgresql.png',
          name: 'postgres'
        }
      ]
    },
    {
        id:'3',
      jobTitle: 'Full Stack Intern JS/Java',
      companyName: 'Keyrus',
      companyLogo: '/keyrus-logo.png',
      clientLogo: 'totalEnergies.png',
      clientName: 'Total Energies',
      startingDate: 'Started 2021-03-01',
      endDate: 'Ended 2023-09-01',
      summary: [
        'Added functionalities in React',
        'Got invested in Agile workshops',
        'Secured the previous application'
      ],
      techUsed: [
        {
          src: '/techLogos/JavaScript-logo.png',
          name: 'javascript'
        },
        {
          src: '/techLogos/java.png',
          name: 'java'
        },
        {
          src: '/techLogos/React-icon.png',
          name: 'React'
        },
        {
          src: '/techLogos/redux-logo.png',
          name: 'Redux'
        },
        {
          src: '/techLogos/postgresql.png',
          name: 'postgres'
        }
      ]
    },
    {
    id:'4',
      jobTitle: 'R&D Mobile Intern',
      companyName: 'Trilogy Technologies',
      companyLogo: '/trilogy.png',
      startingDate: 'Started 2021-03-01',
      endDate: 'Ended 2023-09-01',
      summary: [
        'Rfid in research and development',
        'Build smartwatch prototype',
        'Wine inventory mobile application'
      ],
      techUsed: [
        {
          src: '/techLogos/JavaScript-logo.png',
          name: 'javascript'
        },
        {
          src: '/techLogos/java.png',
          name: 'java'
        },
        {
          src: '/techLogos/android.png',
          name: 'android'
        },
        {
          src: '/techLogos/rfid.png',
          name: 'rfid'
        }
      ]
    }
  ]