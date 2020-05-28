import React from "react"

import { useStaticQuery } from "gatsby"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import "./styles.css"
import Img from "gatsby-image"
import { FiPhoneCall } from "react-icons/fi"
import { IoMdPaperPlane } from "react-icons/io"
import BackgroundImage from "gatsby-background-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Contact() {
  const data = useStaticQuery(graphql`
    query logoQuery {
      desktop: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      maps: file(relativePath: { eq: "impulse-maps.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const logo = data.desktop.childImageSharp.fluid
  const maps = data.maps.childImageSharp.fluid

  return (
    <>
      <div id="#contact" className="container contact">
        <div className="contact-section">
          <div
            className="contact-info"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Img fluid={logo} alt="logo Impulse" />
            <h4>Vamos Conversar</h4>
            <div>
              <a href="https://wa.me/5548999101220" target="_blank">
                <FiPhoneCall />
                (48) 999-101-220
              </a>
              <a href="mailto:impulseworks@gmail.com">
                <IoMdPaperPlane />
                impulseworks@gmail.com
              </a>
            </div>
            <AnchorLink className="button" to="/contato" title="Contact us">
              Entre em contato
            </AnchorLink>
          </div>
          <BackgroundImage Tag="section" className={"map"} fluid={maps} />
        </div>
        <footer>
          <div className="social-icons">
            <OutboundLink href="https://github.com/impuls-e">
              <FaGithub />
            </OutboundLink>
            <OutboundLink href="https://www.instagram.com/impulse.works/">
              <FaInstagram />
            </OutboundLink>
            <OutboundLink href="https://www.linkedin.com/company/impuls-e/">
              <FaLinkedinIn />
            </OutboundLink>
          </div>
          <ul>
            <li>
              <AnchorLink to="/" title="Home">
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#projects" title="Projects">
                Projetos
              </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#services" title="Contact us">
                Serviços
              </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/contato" title="Contact us">
                Contato
              </AnchorLink>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}
