import React from 'react'
import { Tech } from '../types/ExperienceType'
import TechItem from './TechItem'

const techArray: Tech[] = [
  { name: 'Typescript', level: 'Advanced', src: '/techLogos/Typescript.svg' },
  {
    name: 'Javascript',
    level: 'Advanced',
    src: '/techLogos/JavaScript-logo.png'
  },
  {
    name: 'HTML',
    level: 'Advanced',
    src: '/techLogos/html.png'
  },
  {
    name: 'Astro',
    level: 'Advanced',
    src: '/techLogos/astro.png'
  },
  {
    name: 'Vite',
    level: 'Intermediate',
    src: '/techLogos/Vitejs-logo.png'
  },
  {
    name: 'React',
    level: 'Advanced',
    src: '/techLogos/React-icon.png'
  },
  {
    name: 'Redux',
    level: 'Intermediate',
    src: '/techLogos/redux-logo.png'
  },
  {
    name: 'Next',
    level: 'Intermediate',
    src: '/techLogos/next-js.svg'
  },
  {
    name: 'Tailwindcss',
    level: 'Intermediate',
    src: '/techLogos/Tailwind-logo.png'
  }
]

const Frontend = () => {
  return (
    <div className=" border-2 border-custom-100 rounded-lg p-2 snap-start md:snap-align-none">
      <h2 className="text-2xl text-custom-300 font-bold py-4">FrontEnd</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
        {techArray.map(tech => {
          return (
            <TechItem
              key={tech.name}
              level={tech.level}
              name={tech.name}
              src={tech.src}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Frontend
