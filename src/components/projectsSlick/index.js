import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./styles.css"
import Img from "gatsby-image"

export default function ProjetosSlick() {
  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`
  }
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allMdx(filter: { frontmatter: { tag: { eq: "project" } } }) {
        edges {
          node {
            frontmatter {
              description
              title
              handle
              services
              imgUrl {
                childImageSharp {
                  fluid(maxHeight: 550) {
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
    <>
      {projects.map(project => (
        <div
          key={generateKey(project.node.frontmatter.handle)}
          className="item"
        >
          <div
            className="image"
            data-sal="slide-right"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Img
              fluid={project.node.frontmatter.imgUrl.childImageSharp.fluid}
              alt="An image apresentation from current project"
            />
          </div>
          <div
            className="info-item"
            data-sal="slide-left"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>{project.node.frontmatter.title}</h4>
            <p>{project.node.frontmatter.description}</p>
            <ul class="list-icons type-horizontal">
              {project.node.frontmatter.services.split(", ").map(tech => (
                <li class="">
                  <img src={`/services/${tech}.png`} alt={tech} />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
            <Link to={`/project/${project.node.frontmatter.handle}`}>
              Ver Projeto
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
