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
              content="https://impuls-e.works/static/092f7fc6502a3ac817372bfb530fee6f/61e93/logo.webp"
            />
          )}

          {image && (
            <meta
              property="og:image:url"
              content="https://impuls-e.works/static/092f7fc6502a3ac817372bfb530fee6f/61e93/logo.webp"
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
              content="https://impuls-e.works/static/092f7fc6502a3ac817372bfb530fee6f/61e93/logo.webp"
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
