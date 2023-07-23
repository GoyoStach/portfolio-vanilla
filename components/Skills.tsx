import Backend from './Backend'
import DevOps from './DevOps'
import Frontend from './Frontend'
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center items-center gap-y-10 p-10 px-2 lg:px-5"
    >
      <h3 className="ml-[20px] uppercase tracking-[20px] text-custom-100 text-2xl text-center">
        Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Frontend />
        <Backend />
      </div>

      <div className="snap-start lg:snap-center">
        <DevOps />
      </div>
      <div className="text-center text-custom-100 border-2 p-2 border-custom-200 rounded-xl">
        <p>Advanced: Worked for more than 2 years on this tech</p>
        <p>Intermediate: Worked for arround a 1 year on this tech</p>
        <p>Basic: Able to understand at a business level</p>
        <p>
          Interest: Developped personnal project & spared some of my free time
          on it
        </p>
      </div>
    </motion.div>
  )
}

export default Skills
