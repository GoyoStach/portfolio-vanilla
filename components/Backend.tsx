import React from 'react'
import { Tech } from '../types/ExperienceType'
import TechItem from './TechItem'
import { motion } from 'framer-motion'
import { zoomIn } from '../helper/animations'

const techArray: Tech[] = [
  { name: 'Typescript', level: 'Advanced', src: '/techLogos/Typescript.svg' },
  {
    name: 'Node',
    level: 'Advanced',
    src: '/techLogos/node.png'
  },
  {
    name: 'Nest',
    level: 'Intermediate',
    src: '/techLogos/nest.png'
  },
  {
    name: 'Type ORM',
    level: 'Intermediate',
    src: '/techLogos/typeorm.png'
  },
  {
    name: 'Prisma',
    level: 'Interest',
    src: '/techLogos/prisma.png'
  },
  {
    name: 'trcp',
    level: 'Interest',
    src: '/techLogos/trcp.svg'
  },
  {
    name: 'Java EE',
    level: 'Basic',
    src: '/techLogos/java.png'
  }
]

const Backend = () => {
  return (
    <div className=" border-2 border-custom-100 rounded-lg p-2 snap-start md:snap-align-none">
      <h2 className="text-2xl text-custom-300 font-bold py-4">Backend</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
        {techArray.map((tech, index) => {
          return (
            <motion.div
              key={tech.name}
              variants={zoomIn(0, 1)}
              initial="hidden"
              whileInView={'show'}
            >
              <TechItem
                level={tech.level}
                name={tech.name}
                src={tech.src}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Backend
