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
      className="h-screen min-h-screen max-w-7xl w-full flex relative items-center justify-center mx-auto flex-col text-center gap-4"
    >
      <h3 className=" md:absolute top-24 uppercase tracking-[20px] text-custom-100 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Frontend />
        <Backend />
      </div>

      <DevOps />
      <div className="text-center text-custom-100 border-2 p-2 border-custom-200 rounded-xl ">
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
