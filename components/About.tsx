import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/animations'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center items-center gap-y-10 p-10 px-2 lg:px-5"
    >
      <h3 className="ml-[20px] uppercase tracking-[20px] text-custom-100 text-2xl text-center">
        About
      </h3>

      <div className="flex flex-col items-center flex-grow justify-evenly">
        <motion.img
          src="/profilePic.png"
          className="flex-shrink-0 w-56 h-56 rounded-full object-cover lg:w-80 lg:h-80 hidden sm:flex"
          variants={fadeIn('up', 'Inertia', '0', '1')}
          whileInView={'show'}
          initial="hidden"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            About <span className="text-custom-200">Me </span>!
          </h4>
          <p className="text-base xl:text-xl">
            I am a full stack lead tech & web developper. I mainly focus on{' '}
            <span className="underline decoration-custom-200 underline-offset-2">
              Typescript & Javascript
            </span>{' '}
            but I like to explore lesser known languages such as Elixir.
            <br />
            <br />I graduated from{' '}
            <span className="underline decoration-custom-200 underline-offset-2">
              ISEP
            </span>{' '}
            (institut supérieur d&apos;électronique de Paris) in 2021, with a
            specialization in inovation and entrepreneurship.
            <br />
            <br />
            Throughout this 5 years{' '}
            <span className="underline decoration-custom-200 underline-offset-2">
              master degree
            </span>
            , I did exchanges in theses universities :<br />
            <br />
            The Glyndwr Wrexham Univerity,{' '}
            <span className="text-custom-200">Wales, UK</span>
            <br />
            Inha University,{' '}
            <span className="text-custom-200">Incheon, South Korea</span>
            <br />I also did an 6 months intership in{' '}
            <span className="text-custom-200">Singapore</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
