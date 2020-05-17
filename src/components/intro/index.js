import React, { useState } from "react"
import "./styles.css"
import { graphql, useStaticQuery } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
// import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FaRocket } from "react-icons/fa"

import Icon from "../../svgs/rocket.svg"

import { SocialProfileJsonLd } from "gatsby-plugin-next-seo"

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
                      ...GatsbyImageSharpFixed_tracedSVG
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
  // const img = data.allMdx.edges[0].node.frontmatter.imgUrl.childImageSharp.fixed

  const clickStyle = movClick ? "click" : ""

  function handleClick() {
    setMovClick(!movClick)
    setTimeout(() => {
      document.getElementById("#contact").scrollIntoView()
    }, 1500)
  }
  return (
    <>
      <SocialProfileJsonLd
        type="Person"
        name="Impulse"
        url="https://impuls-e.works/"
        sameAs={[
          "https://www.facebook.com/worksimpulse",
          "https://instagram.com/impulse.works",
          "https://www.linkedin.com/company/impuls-e",
          "https://github.com/impuls-e",
        ]}
      />
      <div className="container intro">
        <div className="about">
          <h1>Impulse</h1>
          <h2>Um salto no seu negócio</h2>
          <button
            onClick={e => {
              // To stop the page reloading
              e.preventDefault()
              // Lets track that custom click
              trackCustomEvent({
                // string - required - The object that was interacted with (e.g.video)
                category: "Special Button",
                // string - required - Type of interaction (e.g. 'play')
                action: "Click",
                // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                label: "Gatsby Plugin Example Campaign",
                // number - optional - Numeric value associated with the event. (e.g. A product ID)
                value: 43,
              })
              handleClick()
            }}
          >
            Entre em contato
          </button>
          <AnchorLink className={`rocket`} to="/" title="home">
            <FaRocket />
          </AnchorLink>
        </div>
        {/* <div className={`image ${clickStyle}`}>
          <Icon />
        </div> */}
      </div>
    </>
  )
}
