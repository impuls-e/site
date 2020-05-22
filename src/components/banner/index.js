import React from "react"
import { Link } from "gatsby"

import { Container, Button } from "./styles"
const Banner = () => {
  return (
    <Container className="container">
      <h4>Vamos fechar um projeto?</h4>
      <Link>Entre em contato</Link>
    </Container>
  )
}

export default Banner
