import React from "react"
import { useStaticQuery } from "gatsby"

import { Background } from "./styles"

const BackgroundImage = () => {
  const data = useStaticQuery(graphql`
    query BackgroundQuery {
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
    <Background
      Tag="section"
      className={"intro-background"}
      fluid={imageData}
    />
  )
}

export default BackgroundImage
