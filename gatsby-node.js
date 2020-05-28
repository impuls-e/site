/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all projects in Shopify
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { tag: { eq: "project" } } }) {
        edges {
          node {
            frontmatter {
              description
              title
              handle
              services
              liveUrl
              pagespeed {
                childImageSharp {
                  fluid(maxHeight: 550) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  // The project "title" is generated automatically by Shopify
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/project/${node.frontmatter.handle}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        project: node.frontmatter,
      },
    })
  })
}
