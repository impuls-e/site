import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Undraw from "../../assets/undraw.svg"

import { Container, Description, Form } from "./styles"

const HeroContact = () => {
  return (
    <>
      <Container>
        <Description>
          <div>
            <h1>Vamos construir algo extraordinário juntos.</h1>
            <p>
              Você pode apenas nos dizer o que precisa e forneceremos uma
              solução. Pode ter a certeza de que está em boas mãos. 😃
            </p>
            <AnchorLink to="/contato/#form">Vamos conversar</AnchorLink>
          </div>
          <aside>
            <Undraw />
          </aside>
        </Description>
        <Form
          id="form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>
          <h3
            className="contact-info"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Envie-nos uma mensagem.
          </h3>
          <div className="row">
            <label>
              Endereço de e-mail (obrigatório)
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Coloque seu e-mail"
                required
              />
            </label>
            <label>
              Seu Nome (obrigatório)
              <input
                type="text"
                name="name"
                placeholder="Coloque seu nome"
                id="name"
                required
              />
            </label>
          </div>
          <div className="row">
            <label>
              Tecnologias (opcional)
              <input
                type="techs"
                name="techs"
                id="techs"
                placeholder="Digite aqui as tecnologias"
              />
            </label>
            <label>
              Telefone (opcional)
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Digite seu telefone"
              />
            </label>
          </div>
          <div className="row">
            <label>
              Mensagem (obrigatório)
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Coloque aqui a sua necessidade"
              />
            </label>
          </div>

          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </>
  )
}
export default HeroContact
