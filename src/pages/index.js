import React from "react"
import Seo from "../components/Seo"
import Navigation from "../components/Navigation"
import BackgroundImage from "../components/BackgroundImage"
import Hero from "../containers/Hero"
import About from "../containers/About"
import Projects from "../containers/Projects"
import OurServices from "../containers/OurServices"
import Contact from "../containers/Contact"

import GlobalStyle from "../styles/global"

export default () => {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <Navigation />
      <BackgroundImage />
      <Hero />
      <About />
      <Projects />
      <OurServices />
      <Contact />
    </>
  )
}
