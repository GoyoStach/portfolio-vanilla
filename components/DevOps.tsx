import React from 'react'
import { Tech } from '../types/ExperienceType'
import TechItem from './TechItem'
import { motion } from 'framer-motion'
import { zoomIn } from '../helper/animations'

const techArray: Tech[] = [
  { name: 'Git', level: 'Advanced', src: '/techLogos/git.png' },
  {
    name: 'Postgresql',
    level: 'Intermediate',
    src: '/techLogos/postgresql.png'
  },
  { name: 'Docker', level: 'Intermediate', src: '/techLogos/Docker.png' },
  { name: 'Jira', level: 'Intermediate', src: '/techLogos/jira.png' },
  { name: 'Mongo', level: 'Interest', src: '/techLogos/mongo.png' },
  { name: 'RFID', level: 'Interest', src: '/techLogos/rfid.png' }
]

const DevOps = () => {
  return (
    <div className=" border-2 border-custom-100 rounded-lg p-2">
      <h2 className="text-2xl text-custom-300 font-bold py-4">Others</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 justify-center">
        {techArray.map(tech => {
          return (
            <motion.div
              key={tech.name}
              variants={zoomIn(0, 1)}
              initial="hidden"
              whileInView={'show'}
            >
              <TechItem
                key={tech.name}
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

export default DevOps
