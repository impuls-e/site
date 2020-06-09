import React from "react"
import { Link } from "gatsby"

import { Container } from "./styles"
const Banner = () => {
  return (
    <Container className="container">
      <h4>Vamos fechar um projeto?</h4>
      <Link to="/contato">Entre em contato</Link>
    </Container>
  )
}

export default Banner
