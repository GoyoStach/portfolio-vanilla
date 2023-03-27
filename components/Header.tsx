import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <SocialIcon
          url="https://github.com/GoyoStach"
          fgColor="#DCD7C9"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/guillaumeexcoffier/?locale=en_US"
          fgColor="#DCD7C9"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-custom-100"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#DCD7C9"
          bgColor="transparent"
        />

        <a
          className="hidden md:inline-flex text-sm text-custom-100"
          href="mailto:guillaume.excoffier86@gmail.com"
        >
          Send me an Email !
        </a>
      </motion.div>
    </header>
  )
}

export default Header
