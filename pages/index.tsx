import {
  About,
  ContactMe,
  Experiences,
  Header,
  Hero,
  Skills
} from '../components'

import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-br from-custom-500 to-custom-400 text-white h-screen  overflow-y-scroll z-0 snap-mandatory snap-y">
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

      <main className="max-w-[1500px] mx-auto ">
        <section
          id="hero"
          className="snap-start"
        >
          <Header />

          <Hero />
        </section>
        <section
          id="about"
          className="snap-start"
        >
          <About />
        </section>

        <section
          id="about"
          className="snap-start"
        >
          <Experiences />
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
      </main>
    </div>
  )
}

export default Home
