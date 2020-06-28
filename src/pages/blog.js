import React from "react"
import Seo from "../components/Seo"
import Navigation from "../components/Navigation"
import Contact from "../containers/Contact"
import GlobalStyle from "../styles/global"

export default () => {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <Navigation />
      <Contact />
    </>
  )
}
