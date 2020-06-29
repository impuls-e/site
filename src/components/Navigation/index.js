import React, { useState } from "react"
import { Container, Hamburguer, Logo, HeaderMenu } from "./styles.js"
import Rocket from "../../assets/rocket-icon.svg"

import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navigation = () => {
  const [click, setClick] = useState(false)
  const [hamburguer, setHamburguer] = useState(false)

  const clickStyle = click ? "click" : ""

  function handleClick() {
    setHamburguer(!hamburguer)
    setClick(!click)
  }

  return (
    <>
      <Container>
        <Hamburguer
          onClick={handleClick}
          className={`hamburguermenu ${clickStyle}  `}
        >
          <div></div>
          <div></div>
          <div></div>
        </Hamburguer>
        <Logo className={`logo`} to="/" title="home">
          <Rocket />
        </Logo>

        <HeaderMenu className={`menu ${clickStyle}`}>
          <li>
            <AnchorLink onClick={handleClick} to="/" title="Our home">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              onClick={handleClick}
              to="/#projects"
              title="Our projects"
            >
              Projetos
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              onClick={handleClick}
              to="/#services"
              title="Our services"
            >
              Serviços
            </AnchorLink>
          </li>
          <li>
            <AnchorLink onClick={handleClick} to="/contato" title="Contact us">
              Contato
            </AnchorLink>
          </li>
        </HeaderMenu>
      </Container>
    </>
  )
}

export default Navigation
