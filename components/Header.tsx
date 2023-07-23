import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { slideIn } from '../helper/animations'

type Props = {}

function Header({}: Props) {
  return (
    <header className="top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 overflow-hidden">
      <motion.div
        key={'left-header'}
        className="flex flex-row items-center text-custom-100"
        whileInView={'show'}
        initial="hidden"
        variants={slideIn('left', 'Inertia', '0', '1')}
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
        key={'right-header'}
        className="flex flex-row items-center text-custom-100"
        whileInView={'show'}
        initial="hidden"
        variants={slideIn('right', 'Inertia', '0', '1')}
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
