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
        <h1>{title}</h1>
        <p>{description}</p>
        <a className="site" href={liveUrl}>
          Veja o site <FaExternalLinkAlt />
        </a>
      </section>
      <aside>
        <h4>Serviços</h4>
        <p>{services}</p>
        <h4>Website</h4>
      </aside>
    </div>
  )
}
