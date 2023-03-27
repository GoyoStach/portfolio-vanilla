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
        src="/logo.png"
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
        <p className="text-base">test</p>
      </div>
    </motion.div>
  )
}

export default About
