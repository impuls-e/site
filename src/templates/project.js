import React from "react"
import Seo from "../components/Seo"
import Navigation from "../components/Navigation"
import HeroProject from "../containers/HeroProject"
import Contact from "../containers/Contact"
import GlobalStyle from "../styles/global"

const ProjectTemplate = ({ pageContext }) => {
  const { project } = pageContext
  return (
    <>
      <GlobalStyle />
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
    </>
  )
}
export default ProjectTemplate
