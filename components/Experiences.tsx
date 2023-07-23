import { useState } from 'react'
import { motion } from 'framer-motion'

import { ExperienceCard } from '../components'
import { experiences } from '../constants/workExperiences'

const Experiences = () => {
  const [active, setActive] = useState('1')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center items-center gap-y-10 p-10 px-2 lg:px-5"
    >
      <h3 className="ml-[20px] uppercase tracking-[20px] text-custom-100 text-2xl text-center">
        Works
      </h3>
      <div className="flex lg:flex-row flex-col justify-between gap-5 w-full min-h-[70vh] items-center">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Experiences
