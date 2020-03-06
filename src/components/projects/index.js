import React from "react"
import "./styles.css"
import ProjetosSlick from "../projects-slick"

export default function Projetos() {
  return (
    <div id="projects" className="container projetos">
      <h3>Projetos Recentes</h3>
      <ProjetosSlick />
    </div>
  )
}
