import React from "react"
import "./styles.css"
import ProjetosSlick from "../projectsSlick"
import Banner from "../banner"

export default function Projetos() {
  return (
    <>
      <div id="projects" className="container projetos">
        <h3
          className="contact-info"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Projetos Recentes
        </h3>
        <ProjetosSlick />
      </div>

      <Banner />
    </>
  )
}
