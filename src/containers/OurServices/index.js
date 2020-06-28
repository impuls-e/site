import React from "react"
import { Container, Itens, Item, Description } from "./styles"
import BannerBlog from "../../components/BannerBlog"
import Img from "gatsby-image"

import { useStaticQuery } from "gatsby"
const OurServices = () => {
  const data = useStaticQuery(graphql`
    query servicesQuery {
      frontend: allFile(
        filter: { relativeDirectory: { eq: "services/frontend" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 50, maxWidth: 50) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
      backend: allFile(
        filter: { relativeDirectory: { eq: "services/backend" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 50, maxWidth: 50) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
      cms: allFile(filter: { relativeDirectory: { eq: "services/cms" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 50, maxWidth: 50) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
      ecommerce: allFile(
        filter: { relativeDirectory: { eq: "services/ecommerce" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 50, maxWidth: 50) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
      design: allFile(
        filter: { relativeDirectory: { eq: "services/design" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 50, maxWidth: 50) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
      mobile: allFile(
        filter: { relativeDirectory: { eq: "services/mobile" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 50, maxWidth: 50) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)
  const frontend = data.frontend.edges
  const backend = data.backend.edges
  const cms = data.cms.edges
  const ecommerce = data.ecommerce.edges
  const design = data.design.edges
  const mobile = data.mobile.edges
  console.log(frontend)
  return (
    <>
      <Container id="services" className="container">
        <Description>
          <h3
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Em que podemos ajudá-lo ?
          </h3>
        </Description>
        <Itens>
          <Item>
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Front-End
            </h4>
            <ul
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {data.frontend.edges.map(img => (
                <li key={img.node.childImageSharp.fluid.originalName}>
                  <Img
                    fluid={img.node.childImageSharp.fluid}
                    alt="An image apresentation from current project"
                  />
                  <span>
                    {img.node.childImageSharp.fluid.originalName.split(".")[0]}
                  </span>
                </li>
              ))}
            </ul>

            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Nossos desenvolvedores Front-End criarão a parte visual do seu
              aplicativo ou site usando as melhores e mais recentes tecnologias
              disponíveis no mercado, como React.js, Vue.js, Webpack e SASS.
              Também garantiremos que o front-end corresponda completamente ao
              seu design e especificação e também funcione perfeitamente em
              todos os tamanhos e dispositivos de tela.
            </p>
          </Item>
          <Item>
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Back-End
            </h4>
            <ul
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {backend.map(img => (
                <li key={img.node.childImageSharp.fluid.originalName}>
                  <Img
                    fluid={img.node.childImageSharp.fluid}
                    alt="An image apresentation from current project"
                  />
                  <span>
                    {img.node.childImageSharp.fluid.originalName.split(".")[0]}
                  </span>
                </li>
              ))}
            </ul>

            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Criaremos o back-end do seu aplicativo usando as melhores
              tecnologias disponíveis no mercado, como Node.js/Express, PHP ou
              Laravel. Temos uma vasta experiência na criação de grandes
              sistemas ERP, bem como em aplicativos da Web que exigem Rest APIs
              personalizadas.
            </p>
          </Item>
          <Item>
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              CMS
            </h4>
            <ul
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {cms.map(img => (
                <li key={img.node.childImageSharp.fluid.originalName}>
                  <Img
                    fluid={img.node.childImageSharp.fluid}
                    alt="An image apresentation from current project"
                  />
                  <span>
                    {img.node.childImageSharp.fluid.originalName.split(".")[0]}
                  </span>
                </li>
              ))}
            </ul>

            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              A escolha do CMS correto é parte integrante da oferta da melhor
              experiência para seus clientes. Temos uma vasta experiência em
              WordPress, Drupal, Typo3, Contentful, Grav e Gatsby. Criamos
              soluções CMS personalizadas para algumas das marcas mais
              reconhecidas do mundo.
            </p>
          </Item>
          <Item>
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              e-Commerce
            </h4>
            <ul
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {ecommerce.map(img => (
                <li key={img.node.childImageSharp.fluid.originalName}>
                  <Img
                    fluid={img.node.childImageSharp.fluid}
                    alt="An image apresentation from current project"
                  />
                  <span>
                    {img.node.childImageSharp.fluid.originalName.split(".")[0]}
                  </span>
                </li>
              ))}
            </ul>

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
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              UX/UI
            </h4>
            <ul
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {design.map(img => (
                <li key={img.node.childImageSharp.fluid.originalName}>
                  <Img
                    fluid={img.node.childImageSharp.fluid}
                    alt="An image apresentation from current project"
                  />
                  <span>
                    {img.node.childImageSharp.fluid.originalName.split(".")[0]}
                  </span>
                </li>
              ))}
            </ul>

            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              A representação visual do seu site e aplicativo é muito crucial
              para aumentar sua taxa de conversão. Seus usuários esperam uma
              interface fácil de usar que eles possam navegar com facilidade.
              Temos uma grande equipe de designers experientes que se esforçam
              bastante para organizar a interface, para que seus usuários e
              clientes tenham uma experiência agradável usando o site ou
              aplicativo.
            </p>
          </Item>
          <Item>
            <h4
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Mobile
            </h4>
            <ul
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {mobile.map(img => (
                <li key={img.node.childImageSharp.fluid.originalName}>
                  <Img
                    fluid={img.node.childImageSharp.fluid}
                    alt="An image apresentation from current project"
                  />
                  <span>
                    {img.node.childImageSharp.fluid.originalName.split(".")[0]}
                  </span>
                </li>
              ))}
            </ul>

            <p
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Em 2018, mais de 65% do tráfego mundial da Internet veio de
              dispositivos móveis. Muitas empresas globais, como Google,
              Facebook e Microsoft, concentram seus recursos em refinar a
              experiência de seus clientes que usam dispositivos móveis. Podemos
              criar seu aplicativo móvel usando tecnologias como React Native,
              Android Studio ou Xcode.
            </p>
          </Item>
        </Itens>
      </Container>
      <BannerBlog />
    </>
  )
}
export default OurServices
