import {
  About,
  ContactMe,
  Header,
  Hero,
  Skills,
  WorkExperience
} from '../components'

import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-custom-500 text-white h-screen snap-mandatory snap-y overflow-scroll z-0">
      <Head>
        <meta
          key={'title'}
          name="title"
          content="Guillaume Excoffier"
        />
        <meta
          key={'description'}
          name="description"
          content="Portfolio website of Guillaume Excoffier. You can see here all my projects !"
        />
        <link
          rel="icon"
          type="image/png"
          href="/logo.png"
        />
      </Head>

      <Header />

      <section
        id="hero"
        className="snap-start"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="snap-center"
      >
        <About />
      </section>

      <section
        id="experience"
        className="snap-center"
      >
        <WorkExperience />
      </section>

      <section
        id="skills"
        className="snap-start"
      >
        <Skills />
      </section>

      <section
        id="contact"
        className="snap-start"
      >
        <ContactMe />
      </section>
    </div>
  )
}

export default Home

