import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import OurDescription from "../components/OurDescription"
import OurProjects from "../components/OurProjects"
import OurServices from "../components/OurServices"
import Contact from "../components/Contact"

export default () => {
  return (
    <>
      <Layout>
        <Seo />
        <Navigation />
        <Hero />
        <OurDescription />
        <OurProjects />
        <OurServices />
        <Contact />
      </Layout>
    </>
  )
}
