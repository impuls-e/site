import React from "react"
import "./styles.css"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

export default function Intro() {
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

  return (
    <>
      <div className="container intro">
        <div className="about">
          <h1>Impuls-e</h1>
          <h2>Um salto no seu negócio</h2>
        </div>
        <div className="image">
          <Img fluid={img} alt="A super hero, very fast" />
        </div>
      </div>
    </>
  )
}
