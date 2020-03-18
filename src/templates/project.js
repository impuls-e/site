import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Contact from "../components/contact"

const ProjectTemplate = ({ pageContext }) => {
  const { project } = pageContext
  return (
    <Layout>
      <Seo />
      <Header />
      <h1>{project.title}</h1>
      <div>{project.description}</div>
      <Contact />
    </Layout>
  )
}
export default ProjectTemplate
