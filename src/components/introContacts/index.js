import React from "react"
import "./styles.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Undraw from "../../assets/undraw.svg"
export default function introContacts() {
  return (
    <>
      <div className="intro-contacts">
        <section>
          <div>
            <h1>Vamos construir algo extraordinário juntos.</h1>
            <p>
              Você pode apenas nos dizer o que precisa e forneceremos uma
              solução. Muitas empresas líderes já confiaram em nós. Você pode
              ter certeza de que está em boas mãos. 😃
            </p>
            <AnchorLink to="#form">Vamos conversar</AnchorLink>
          </div>
          <aside>
            <Undraw />
          </aside>
        </section>
        <form
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
          <div>
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
          </div>
          <div>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
          </div>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}
