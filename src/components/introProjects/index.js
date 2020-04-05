import React from "react"
import "./styles.css"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function introProjects({
  title,
  description,
  services,
  liveUrl,
}) {
  return (
    <div className="intro-projects">
      <section>
        <h4>Cliente</h4>
        <h1>{title}</h1>
        <h4>Sobre o Projeto</h4>
        <p>{description}</p>
      </section>
      <aside>
        <h4>Serviços</h4>
        <p>{services}</p>
        <h4>Website</h4>
        <a className="site" href={liveUrl}>
          Site {title} <FaExternalLinkAlt />
        </a>
      </aside>
    </div>
  )
}
