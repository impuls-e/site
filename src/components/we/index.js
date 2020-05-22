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
              Desenvolvimento de sites, portais e blogs com acesso a todos os
              dispositivos móveis. Em cada projeto oferecemos a melhor
              experiência de navegação ao usuário, atingindo e muitas vezes
              superando o objetivo definido.
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
              Somos especialistas em desenvolvimento de Landing Page, criamos
              páginas estratégicas para alavancar o potencial da sua empresa,
              produtos e serviços oferecidos. Nós desenvolvemos landing pages
              para os mais diferentes ramos de atividade, e o ponto em comum em
              todas as empresas que aderiram a utilização das landing pages foi
              o aumento na captação de leads e na conversão em venda real,
              aumentando a receita e visibilidade das campanhas.
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
              A receita global de comércio eletrônico para 2018 é estimada em US
              $ 2,85 trilhões. Os especialistas prevêem que esse número quase
              dobrará até 2021, o que é uma curva de crescimento bastante
              acentuada. Podemos criar uma loja on-line e ajudá-lo a automatizar
              a maioria dos seus negócios de comércio eletrônico, para que você
              se concentre no que é importante. Temos experiência com Shopify,
              WooCommerce, OpenCart, Magento e PrestaShop.
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
              Desenvolvemos a sua ideia! Transformamos desejos em realidades,
              seja um projeto para sua startup ou para um negócio consolidado.
              Desenvolvimento de aplicativos é aqui na Impulse!
            </p>
          </Item>
        </Itens>
      </Container>
    </>
  )
}

export default We
