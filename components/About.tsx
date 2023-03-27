import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-custom-100 text-2xl">
        About
      </h3>

      <motion.img
        src="/profilePic.png"
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-custom-200">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          I am a full stack Lead tech in Keyrus based in Lyon. We are recruiting
          so feel free to contact me if you ever need more information !<br />
          <br />
          I graduated from ISEP (institut supérieur d&apos;électronique de
          Paris) in 2021, with a specialization in inovation and
          entrepreneurship.
          <br />
          <br />
          Throughout this 5 years master degree, I did exchanges in theses
          universities :<br />
          <br />
          The Glyndwr Wrexham Univerity, Wales, UK
          <br />
          Inha University, Incheon, South Korea
          <br />I also did an 6 months intership in Singapore
        </p>
      </div>
    </motion.div>
  )
}

export default About
