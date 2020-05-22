import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Projetos from "../components/projects"
import Services from "../components/services"
import We from "../components/we"

import Contact from "../components/contact"
export default () => {
  return (
    <>
      <Layout>
        <Seo />
        <Header />
        <Intro />
        <We />
        <Projetos />
        <Services />
        <Contact />
      </Layout>
    </>
  )
}
