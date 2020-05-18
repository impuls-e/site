import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Projetos from "../components/projects"

import Contact from "../components/contact"
export default () => {
  return (
    <>
      <Layout>
        <Seo />
        <Header />
        <Intro />
        <Projetos />
        {/* <Services /> */}
        <Contact />
      </Layout>
    </>
  )
}
