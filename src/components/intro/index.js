import React, { useState } from "react"
import "./styles.css"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
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
          <h1>Impulse</h1>
          <h2>Um salto no seu negócio</h2>
          <button>Entre em contato</button>
          <AnchorLink className={`rocket`} to="/" title="home">
            <FaRocket />
          </AnchorLink>
        </div>
      </div>
    </>
  )
}
