import React from "react"
import "./styles.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FaRocket } from "react-icons/fa"

import { SocialProfileJsonLd } from "gatsby-plugin-next-seo"

export default function Intro() {
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
          <h1>Impuls-e</h1>
          <h2>Sites e Soluções inteligentes.</h2>
          <AnchorLink
            className="button"
            to="/contato/#form"
            title="go to contato"
          >
            Entre em contato
          </AnchorLink>
          <AnchorLink
            className={`rocket`}
            to="/contato/#form"
            title="go to contato"
          >
            <FaRocket />
          </AnchorLink>
        </div>
      </div>
    </>
  )
}
