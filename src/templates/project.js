import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Navigation from "../components/Navigation"
import HeroProject from "../components/HeroProject"
import Contact from "../components/Contact"

const ProjectTemplate = ({ pageContext }) => {
  const { project } = pageContext
  return (
    <Layout>
      <Seo />
      <Navigation />
      <HeroProject
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
