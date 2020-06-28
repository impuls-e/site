import React from "react"
import Project from "../../components/Project"
import Banner from "../../components/Banner"
import { Container } from "./styles"

const Projects = () => {
  return (
    <>
      <Banner />
      <Container>
        <h3
          className="contact-info"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Projetos Recentes
        </h3>
        <Project />
      </Container>
      <Banner />
    </>
  )
}
export default Projects
