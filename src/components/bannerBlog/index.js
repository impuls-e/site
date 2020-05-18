import React from "react"
import { Link } from "gatsby"
import { Container, Button } from "./styles"
const BannerBlog = () => {
  return (
    <Container className="container">
      <h4>Dicas, Insights e tutoriais no nosso blog!</h4>
      <Link to="#">Acessar o blog</Link>
    </Container>
  )
}

export default BannerBlog
