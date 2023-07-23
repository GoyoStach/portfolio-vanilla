import { Cursor, useTypewriter } from 'react-simple-typewriter'

import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['Full Stack Web Developer', 'World (Wide Web) Traveler'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="/logo.png"
        alt="Profile Pic"
        height={128}
        width={128}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-custom-100 pb-2 tracking-[15px] ml-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-custom-100 h-44 text-center justify-center flex">
          <span className="flex items-center justify-center text-center">
            {text}
          </span>
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
