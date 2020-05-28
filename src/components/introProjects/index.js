import React from "react"
import "./styles.css"
import { FaExternalLinkAlt } from "react-icons/fa"
import Img from "gatsby-image"

export default function introProjects({
  title,
  description,
  services,
  liveUrl,
  pagespeed,
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
        <h4>Métricas de velocidade</h4>
        <div
          className="image"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <img src={pagespeed} alt="pagespeed test image of project" />
        </div>
        <h4>Technologias utilizadas</h4>
        <ul className="list-icons type-horizontal">
          {services.split(", ").map(tech => (
            <li className="">
              <img src={`/services/${tech}.png`} alt={tech} />
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
