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
        <>
          <Helmet title={siteTitle} descriptionTemplate={siteDescription}>
            <meta name="description" content={siteDescription} />
            <meta name="image" content={image} />
            <meta charSet="utf-8" />
            {siteUrl && <meta property="og:url" content={siteUrl} />}

            <meta property="og:type" content="website" />

            {siteTitle && <meta property="og:title" content={siteTitle} />}
            {siteDescription && (
              <meta property="og:description" content={siteDescription} />
            )}
            {image && <meta property="og:image" content="image" />}

            {image && <meta property="og:image:url" content={image} />}

            {image && <meta property="og:image:type" content="image/jpeg" />}
            {image && <meta name="twitter:site" content="@impulsewks"></meta>}
            <meta name="twitter:card" content="summary_large_image" />
            {siteTwitter && (
              <meta name="twitter:creator" content={siteTwitter} />
            )}
            {siteTitle && <meta name="twitter:title" content={siteTitle} />}
            {siteDescription && (
              <meta name="twitter:description" content={siteDescription} />
            )}
            {image && <meta name="twitter:image" content={image} />}
          </Helmet>
        </>
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
