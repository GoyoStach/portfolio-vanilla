import { Experience } from '../types/ExperienceType'
import { motion } from 'framer-motion'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-custom-400 p-10  cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={experience.companyLogo}
        alt="brand-logo"
      />
      {experience.clientName ? (
        <img
          className="w-16 h-16 bg-custom-100 p-1 rounded-full object-contain object-center translate-x-16 -translate-y-16  xl:w-[100px] xl:h-[100px] xl:-translate-y-[100px] xl:translate-x-[100px]"
          src={experience.clientLogo}
          alt={experience.clientName}
        />
      ) : (
        <div className="h-16 xl:h-[100px]" />
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">
          {experience.companyName}
          {experience.clientName ? ' - ' : null}
          <span className="italic">{experience.clientName}</span>
        </p>
        <div className="flex space-x-2 my-2">
          {experience.techUsed.map(tech => {
            return (
              <img
                key={tech.name}
                src={tech.src}
                alt={tech.name}
                className="h-10 w-10 object-contain object-center"
              />
            )
          })}
        </div>
        <p className="uppercase py-5 text-custom-100">
          {experience.startingDate} - {experience.endDate}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.summary.map((point: string) => {
            return <li key={point}>{point}</li>
          })}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
