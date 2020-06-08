import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Navigation from "../components/Navigation"
import HeroContact from "../components/HeroContact"
import Contact from "../components/Contact"

export default () => {
  return (
    <>
      <Layout>
        <Seo />
        <Navigation />
        <HeroContact />
        <Contact />
      </Layout>
    </>
  )
}
