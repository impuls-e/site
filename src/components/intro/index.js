import React, { useState } from "react"
import "./styles.css"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Img from "gatsby-image"

export default function Intro() {
  const [movClick, setMovClick] = useState(false)

  const data = useStaticQuery(
    graphql`
      query ImgQuery {
        allMdx(filter: { frontmatter: { tag: { eq: "intro" } } }) {
          edges {
            node {
              frontmatter {
                description
                title
                imgUrl {
                  childImageSharp {
                    fluid(maxHeight: 270) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const img = data.allMdx.edges[0].node.frontmatter.imgUrl.childImageSharp.fluid

  const clickStyle = movClick ? "click" : ""

  function handleClick() {
    setMovClick(!movClick)
  }
  return (
    <>
      <div className="container intro">
        <div className="about">
          <h1>Impuls-e</h1>
          <h2>Um salto no seu negócio</h2>
          <AnchorLink to="#contact" title="Our contact">
            Decolar
          </AnchorLink>
        </div>
        <div className={`image ${clickStyle}`}>
          <Img fluid={img} alt="A super hero, very fast" />
        </div>
      </div>
    </>
  )
}
