import React, { useState } from "react"
import "./styles.css"
import { useStaticQuery } from "gatsby"
import Rocket from "../../assets/rocket-icon.svg"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import BackgroundImage from "gatsby-background-image"

export default function Header() {
  const [movScroll, setMovScroll] = useState(false)
  const [movClick, setMovClick] = useState(false)
  const [hamburguer, setHamburguer] = useState(false)

  const moveStyle = movScroll ? "move" : ""
  const clickStyle = movClick ? "click" : ""

  function handleClick() {
    setHamburguer(!hamburguer)
    setMovClick(!movClick)
  }
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMdx(filter: { frontmatter: { tag: { eq: "header" } } }) {
        edges {
          node {
            frontmatter {
              description
              title
            }
          }
        }
      }
      desktop: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <>
      <BackgroundImage
        Tag="section"
        className={"intro-background"}
        fluid={imageData}
      />
      <header className={`header`}>
        <button
          onClick={handleClick}
          className={`hamburguermenu ${clickStyle}  `}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <AnchorLink className={`logo ${moveStyle} `} to="/" title="home">
          <Rocket />
        </AnchorLink>

        <ul className={`menu ${clickStyle}  ${moveStyle} `}>
          <li>
            <AnchorLink
              onClick={handleClick}
              to="#projects"
              title="Our projects"
            >
              Projetos
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              onClick={handleClick}
              to="#services"
              title="Our services"
            >
              Serviços
            </AnchorLink>
          </li>
          <li>
            <AnchorLink onClick={handleClick} to="/contacts" title="Contact us">
              Contato
            </AnchorLink>
          </li>
        </ul>
      </header>
    </>
  )
}
