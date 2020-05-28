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
      <IntroProjects
        title={project.title}
        description={project.description}
        liveUrl={project.liveUrl}
        services={project.services}
        pagespeed={project.pagespeed.childImageSharp.fluid.src}
      />
      <Contact />
    </Layout>
  )
}
export default ProjectTemplate
