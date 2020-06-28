import React from "react"
import SEO from "../components/Seo"
import GlobalStyle from "../styles/global"

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
