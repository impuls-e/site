import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

import { Container, Description, Content, Mockups, Techs } from "./styles.js"

const HeroProject = ({
  title,
  description,
  services,
  liveUrl,
  defaultImg,
  cellphone,
  tablet,
  desktop,
}) => {
  return (
    <Container>
      <Description>
        <h1>{title}</h1>
        <p>{description}</p>
      </Description>
      <Content>
        <h4>Imagens</h4>
        <Mockups
          className="image"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <img src={defaultImg} alt="A image of project" />
          <img src={cellphone} alt="A image of project" />
          <img src={tablet} alt="A image of project" />
          <img src={desktop} alt="A image of project" />
        </Mockups>
        <h4>Technologias utilizadas</h4>
        <Techs className="list-icons type-horizontal">
          {services.split(", ").map(tech => (
            <li className="">
              <img src={`/services/${tech}.png`} alt={tech} />
              <span>{tech}</span>
            </li>
          ))}
        </Techs>
        <a className="site" href={liveUrl}>
          Veja o site <FaExternalLinkAlt />
        </a>
      </Content>
    </Container>
  )
}
export default HeroProject
