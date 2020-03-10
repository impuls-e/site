import React, { useState } from "react"
import "./styles.css"
import { graphql, useStaticQuery } from "gatsby"

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
                    fixed(height: 270, width: 140) {
                      ...GatsbyImageSharpFixed
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
  const img = data.allMdx.edges[0].node.frontmatter.imgUrl.childImageSharp.fixed

  const clickStyle = movClick ? "click" : ""

  function handleClick() {
    setMovClick(!movClick)
    setTimeout(() => {
      document.getElementById("#contact").scrollIntoView()
    }, 1500)
  }
  return (
    <>
      <div className="container intro">
        <div className="about">
          <h1>Impulse</h1>
          <h2>Um salto no seu negócio</h2>
          <button onClick={handleClick}>Entre em contato</button>
        </div>
        <div className={`image ${clickStyle}`}>
          <Img fixed={img} alt="A super hero, very fast" />
        </div>
      </div>
    </>
  )
}
