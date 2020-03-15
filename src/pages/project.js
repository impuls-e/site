import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Contact from "../components/contact"

export default () => {
  return (
    <>
      <Layout>
        <Seo />
        <Header />
        <Contact />
      </Layout>
    </>
  )
}
