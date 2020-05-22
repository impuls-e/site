import React from "react"

import { Link, useStaticQuery } from "gatsby"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import "./styles.css"
import Img from "gatsby-image"
import { FiPhoneCall } from "react-icons/fi"
import { IoMdPaperPlane } from "react-icons/io"
import BackgroundImage from "gatsby-background-image"

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
              <a href="">
                <FiPhoneCall />
                impulseworks@gmail.com
              </a>
              <a href="">
                <IoMdPaperPlane />
                (48) 999-101-220
              </a>
            </div>
            <button>Entre em contato</button>
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
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Projetos</Link>
            </li>
            <li>
              <Link href="">Serviços</Link>
            </li>
            <li>
              <Link href="">Contato</Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}
