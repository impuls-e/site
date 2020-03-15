/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./data/config")

module.exports = {
  siteMetadata: {
    title: "Impulse",
    titleTemplate: "%s · Um salto no seu negócio",
    description:
      "Conceitos de design com inovação digital para criar plataformas web e mobile fáceis de usar e que trazem resultados.",
    url: "https://impulse.works",
    siteUrl: "https://impulse.works", // No trailing slash allowed!
    image: `${__dirname}/src/images/impulse.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: "@impuls-e",
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "pt-BR",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://impuls-e.works",
        sitemap: "https://impuls-e.works/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
  ],
}
