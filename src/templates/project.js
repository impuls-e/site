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
        defaultImg={project.defaultImg.childImageSharp.fluid.src}
        cellphone={project.cellphone.childImageSharp.fluid.src}
        tablet={project.tablet.childImageSharp.fluid.src}
        desktop={project.desktop.childImageSharp.fluid.src}
      />
      <Contact />
    </Layout>
  )
}
export default ProjectTemplate
