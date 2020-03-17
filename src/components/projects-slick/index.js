import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./styles.css"
import Img from "gatsby-image"
import NextArrowSlider from "../nextArrowSlider"
import PrevArrowSlider from "../prevArrowSlider"

export default function ProjetosSlick() {
  function SampleNextArrow(props) {
    const { onClick } = props
    return <NextArrowSlider actionClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return <PrevArrowSlider actionClick={onClick} />
  }
  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //arrows: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  }
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allMdx(filter: { frontmatter: { tag: { eq: "project" } } }) {
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
  `)

  const projects = data.allMdx.edges
  return (
    <div className="">
      <Slider {...settings}>
        {projects.map(project => (
          <div
            key={generateKey(project.node.frontmatter.title)}
            className="carousel-item"
          >
            <Img
              fluid={project.node.frontmatter.imgUrl.childImageSharp.fluid}
              alt="An image apresentation from current project"
            />
            <div className="info-item">
              <h4>{project.node.frontmatter.title}</h4>
              <p>{project.node.frontmatter.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
