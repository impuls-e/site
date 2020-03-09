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
      <header className={`header ${moveStyle} ${clickStyle}`}>
        <AnchorLink className={`logo ${moveStyle} `} to="/" title="home">
          <Img fixed={img} alt="A logo from impulse" />
        </AnchorLink>
        <AnchorLink className={`logoIcon ${moveStyle} `} to="/" title="home">
          <FaRocket />
        </AnchorLink>
        <ul className={`menu ${clickStyle}  ${moveStyle} `}>
          <li>
            <AnchorLink to="#projects" title="Our projects">
              Projetos
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="#services" title="Our services">
              Serviços
            </AnchorLink>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <AnchorLink to="#contact" title="Contact us">
              Contato
            </AnchorLink>
          </li>
        </ul>
        <button
          onClick={handleClick}
          className={`icon ${moveStyle} ${clickStyle}  `}
        >
          <HamburgerMenu
            isOpen={hamburguer}
            width={25}
            height={16}
            strokeWidth={2}
            rotate={0}
            color="#71f4fa"
            borderRadius={0}
            animationDuration={0.5}
          />
        </button>
      </header>
    </>
  )
}
