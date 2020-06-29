/* eslint-disable graphql/template-strings */
import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
const SEO = () => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          siteTitle,
          siteDescription,
          siteUrl,
          siteImage,
          siteTwitter,
        },
      },
    }) => {
      const image = `${siteUrl}${siteImage}`
      return (
        <Helmet title={siteTitle} descriptionTemplate={siteDescription}>
          <meta name="description" content={siteDescription} />
          <meta name="image" content={image} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="google-site-verification"
            content="3rrVojyccX1AnT_5-84qWDzn3S3NAvs2c6OvqgOLFYs"
          />
          {siteUrl && <meta property="og:url" content={siteUrl} />}

          <meta property="og:type" content="website" />

          {siteTitle && <meta property="og:title" content={siteTitle} />}
          {siteDescription && (
            <meta property="og:description" content={siteDescription} />
          )}
          {image && (
            <meta
              property="og:image"
              content="https://images-platform.99static.com//CIor8zqRC3wAp--h3G-n19DqEFo=/0x0:2000x2000/fit-in/500x500/projects-files/53/5367/536779/5f0706ca-cc3c-427a-9e13-f06307ee1ef1.jpg"
            />
          )}

          {image && (
            <meta
              property="og:image:url"
              content="https://images-platform.99static.com//CIor8zqRC3wAp--h3G-n19DqEFo=/0x0:2000x2000/fit-in/500x500/projects-files/53/5367/536779/5f0706ca-cc3c-427a-9e13-f06307ee1ef1.jpg"
            />
          )}

          {image && <meta property="og:image:type" content="image/jpeg" />}
          {image && <meta name="twitter:site" content="@impulsewks"></meta>}
          <meta name="twitter:card" content="summary_large_image" />
          {siteTwitter && <meta name="twitter:creator" content={siteTwitter} />}
          {siteTitle && <meta name="twitter:title" content={siteTitle} />}
          {siteDescription && (
            <meta name="twitter:description" content={siteDescription} />
          )}
          {image && (
            <meta
              name="twitter:image"
              content="https://images-platform.99static.com//CIor8zqRC3wAp--h3G-n19DqEFo=/0x0:2000x2000/fit-in/500x500/projects-files/53/5367/536779/5f0706ca-cc3c-427a-9e13-f06307ee1ef1.jpg"
            />
          )}
        </Helmet>
      )
    }}
  />
)
export default SEO
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteUrl
        siteImage
        siteTwitter
      }
    }
  }
`
