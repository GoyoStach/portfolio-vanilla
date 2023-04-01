import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen min-h-screen max-w-7xl w-full flex relative items-center justify-center mx-auto flex-col text-center gap-4"
    >
      <div className="w-full absolute top-[30%] bg-custom-300 left-0 h-[500px] -skew-y-12 opacity-20 " />
      <h3 className="md:absolute top-24 uppercase tracking-[20px] text-custom-100 text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col border-2 rounded-xl border-custom-100 p-2 divide-y-2 divide-custom-200 z-10">
        <div className="flex ">
          <SocialIcon
            url="https://www.linkedin.com/in/guillaumeexcoffier/?locale=en_US"
            fgColor="#DCD7C9"
            bgColor="transparent"
            label="@guillaumeexcoffier"
          />
          <p className=" flex items-center text-custom-100">
            @guillaumeexcoffier
          </p>
        </div>
        <div className="flex">
          <SocialIcon
            url="https://github.com/GoyoStach"
            fgColor="#DCD7C9"
            bgColor="transparent"
          />
          <p className=" flex items-center text-custom-100">@GoyoStach</p>
        </div>
        <div className="flex ">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#DCD7C9"
            bgColor="transparent"
          />
          <a href="mailto:guillaume.excoffier86@gmail.com"></a>
          <p className="flex items-center text-custom-100">
            guillaume.Excoffier86@gmail.com
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactMe
