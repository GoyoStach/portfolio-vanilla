import { Experience } from '../types/ExperienceType'
import { motion } from 'framer-motion'

type Props = {
  experience: Experience
}

const SideExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center w-[150px] md:w-[200px] 3xl:w-[450px] bg-custom-400 p-10 opacity-70 hover:opacity-90 transition-opacity duration-400">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-16 h-16 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={experience.companyLogo}
        alt="brand-logo"
      />
      {experience.clientName ? (
        <img
          className="w-8 h-8 bg-custom-100 p-1 rounded-full object-contain object-center translate-x-8 -translate-y-8  xl:w-[50px] xl:h-[50px] xl:-translate-y-[50px] xl:translate-x-[50px]"
          src={experience.clientLogo}
          alt={experience.clientName}
        />
      ) : (
        <div className="h-8 xl:h-[50px]" />
      )}

      <div className="px-0 hidden lg:flex flex-col">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">
          {experience.companyName}
          {experience.clientName ? ' - ' : null}
          <span className="italic">{experience.clientName}</span>
        </p>
      </div>
    </article>
  )
}

export default SideExperienceCard
