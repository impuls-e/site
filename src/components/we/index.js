import React from "react"
import { Container, Itens, Item, Description } from "./styles"
import Site from "../../assets/site.svg"
import Ecommerce from "../../assets/e-commerce.svg"
import App from "../../assets/app.svg"
import Lp from "../../assets/landing-page.svg"

const We = () => {
  return (
    <>
      <Container className="container">
        <Description>
          <h4
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Quem somos?
          </h4>
          <h3
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Somos uma <strong>Agência Digital</strong> focada em{" "}
            <strong>ajudar nossos clientes</strong> a construir sua presença
            digital online.
          </h3>
        </Description>
        <Itens>
          <Item>
            <Site
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            />
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Sites
            </h4>
            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Somos especialistas na criação de landing pages. de e-commerce na
              plataforma VTEX, estratégias de comunicação on-line, projetos
              omnichannel, portais, performance e consultoria para negócios
              digitais. Nossa equipe está sempre focada em entregar resultados
              para sua empresa baseados em análise de dados, segmentação de
              público, realidade de mercado e expertise de sua equipe em
              técnicas de SEO, CRM e CRO.
            </p>
          </Item>
          <Item>
            <Lp
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            />
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Landing Pages
            </h4>
            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Somos especialistas na criação de landing pages. de e-commerce na
              plataforma VTEX, estratégias de comunicação on-line, projetos
              omnichannel, portais, performance e consultoria para negócios
              digitais. Nossa equipe está sempre focada em entregar resultados
              para sua empresa baseados em análise de dados, segmentação de
              público, realidade de mercado e expertise de sua equipe em
              técnicas de SEO, CRM e CRO.
            </p>
          </Item>
          <Item>
            <Ecommerce
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            />
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              E-Commerce
            </h4>
            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Somos especialistas em implantação de e-commerce na plataforma
              VTEX, estratégias de comunicação on-line, projetos omnichannel,
              portais, performance e consultoria para negócios digitais. Nossa
              equipe está sempre focada em entregar resultados para sua empresa
              baseados em análise de dados, segmentação de público, realidade de
              mercado e expertise de sua equipe em técnicas de SEO, CRM e CRO.
            </p>
          </Item>
          <Item>
            <App
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            />
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Aplicativos
            </h4>
            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Somos especialistas em implantação de e-commerce na plataforma
              VTEX, estratégias de comunicação on-line, projetos omnichannel,
              portais, performance e consultoria para negócios digitais. Nossa
              equipe está sempre focada em entregar resultados para sua empresa
              baseados em análise de dados, segmentação de público, realidade de
              mercado e expertise de sua equipe em técnicas de SEO, CRM e CRO.
            </p>
          </Item>
        </Itens>
      </Container>
    </>
  )
}

export default We
