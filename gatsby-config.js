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
      "Conceitos de design com inovação digital para criar sites e landing pages fáceis de usar e que trazem resultados.",
    url: "https://impulse.works",
    siteUrl: "https://impulse.works", // No trailing slash allowed!
    image: `${__dirname}/src/images/logo.png`, // Path to your image you placed in the 'static' folder
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
    `gatsby-background-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inconsolata:400,600,900"],
        },
      },
    },
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
        icon: "src/assets/rocket-icon.svg",
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
    `gatsby-plugin-styled-components`,
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
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-extract-schema",
      options: {
        dest: `${__dirname}/path/to/schema.json`,
      },
    },
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
