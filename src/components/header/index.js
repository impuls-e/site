import React, { useState } from "react"
import "./styles.css"
import { Link, useStaticQuery } from "gatsby"
import useDocumentScrollThrottled from "../useDocumentScrollThrottled/"
import { FaRocket } from "react-icons/fa"
import HamburgerMenu from "react-hamburger-menu"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"

export default function Header() {
  const [movScroll, setMovScroll] = useState(false)
  const [movClick, setMovClick] = useState(false)
  const [hamburguer, setHamburguer] = useState(false)

  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setTimeout(() => {
      setMovScroll(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

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
              imgUrl {
                childImageSharp {
                  fixed(width: 200, height: 80) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const img = data.allMdx.edges[0].node.frontmatter.imgUrl.childImageSharp.fixed

  return (
    <>
      <div className="intro-background" />
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
          <FaRocket />
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
            <AnchorLink onClick={handleClick} to="#contact" title="Contact us">
              Contato
            </AnchorLink>
          </li>
        </ul>
      </header>
    </>
  )
}
