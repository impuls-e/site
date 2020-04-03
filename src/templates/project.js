import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import IntroProjects from "../components/introProjects"
import Contact from "../components/contact"

const ProjectTemplate = ({ pageContext }) => {
  const { project } = pageContext
  return (
    <Layout>
      <Seo />
      <Header />
      <IntroProjects />
      <Contact />
    </Layout>
  )
}
export default ProjectTemplate
