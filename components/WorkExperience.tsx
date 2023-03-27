import { useEffect, useState } from 'react'

import { Experience } from '../types/ExperienceType'
import ExperienceCard from './ExperienceCard'
import SideExperienceCard from './SideExperienceCard'
import { motion } from 'framer-motion'

type Props = {}

const experienceArray: Experience[] = [
  {
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

const WorkExperience = (props: Props) => {
  const [value, setValue] = useState(0)

  const handleNext = () => {
    const tempValue = value + 1
    setValue(tempValue)
  }
  const handlePrevious = () => {
    const tempValue = value - 1
    setValue(tempValue)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen w-full flex relative flex-col text-left md:flex-row max-w-full justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-custom-100 text-2xl">
        Experience
      </h3>

      <div className="flex flex-col gap-y-2 lg:flex-row justify-evenly w-full">
        <button
          className="flex items-center justify-center"
          onClick={handlePrevious}
          style={{ opacity: value === 0 ? 0 : 1 }}
          disabled={value === 0 ? true : false}
        >
          <SideExperienceCard
            experience={
              value > 0 ? experienceArray[value - 1] : experienceArray[value]
            }
          />
        </button>

        <div className="flex items-center justify-center">
          <ExperienceCard experience={experienceArray[value]} />
        </div>
        <button
          className="flex items-center justify-center "
          onClick={handleNext}
          style={{
            opacity: value === experienceArray.length - 1 ? 0 : 1
          }}
          disabled={value === experienceArray.length - 1 ? true : false}
        >
          <SideExperienceCard
            experience={
              value < experienceArray.length - 1
                ? experienceArray[value + 1]
                : experienceArray[value]
            }
          />
        </button>
      </div>
    </motion.div>
  )
}

export default WorkExperience
