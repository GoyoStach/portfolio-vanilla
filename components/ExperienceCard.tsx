import { FC } from 'react'
import { Experience } from '../types/ExperienceType'
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/animations'

type Props = {
  experience: Experience
  handleClick: (active: any) => void
  active: string
  index: number
}

const ExperienceCard: FC<Props> = ({
  experience,
  active,
  index,
  handleClick
}) => (
  <div
    className={
      active === experience.id
        ? `relative lg:flex-[2] flex-[5] flex items-center justify-center min-w-[170px] h-full transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`
        : 'relative lg:flex[1] flex-[1] flex items-center justify-center min-w-[170px] h-full transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer'
    }
    onClick={() => handleClick(experience.id)}
  >
    <img
      src={experience.companyLogo}
      alt={experience.companyName}
      className="absolute w-full h-full object-contain rounded-[24px] bg-custom-100"
    />
    {active !== experience.id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-custom-500 absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {experience.companyName}
      </h3>
    ) : (
      <motion.div
        variants={fadeIn('up', 'Inertia', '0', '1')}
        className="absolute bottom-0 p-8 justify-center w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] space-y-2"
        whileInView={'show'}
        initial="hidden"
      >
        <div
          className={`flex justify-center rounded-[24px] glassmorphism items-center`}
        >
          {experience.clientLogo !== undefined ? (
            <img
              src={experience.clientLogo}
              alt="client-logo"
              className="w-16 h-16 object-contain bg-white rounded-full "
            />
          ) : null}
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          {experience.companyName}
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {experience.jobTitle}
        </h2>
        <a
          className="p-2 text-custom-200"
          href="#about"
        >
          Learn more !
        </a>
      </motion.div>
    )}
  </div>
)

export default ExperienceCard
