import React from "react"
import "./styles.css"
import { IoIosPeople } from "react-icons/io"
import { FaTools } from "react-icons/fa"
import { MdDevices } from "react-icons/md"

export default function Services() {
  return (
    <div id="services" className="container services">
      <h3>
        Conceitos de design com inovação digital para criar plataformas web e
        mobile fáceis de usar e que trazem resultados.
      </h3>
      <div className="services-section">
        <div className="service">
          <div className="icon">
            <IoIosPeople />
          </div>
          <div className="service-about">
            <h4>Criação e Otimização</h4>
            <p>
              Sites rápidos com layouts modernos, adaptáveis a todos os
              dispositivos, oferencendo uma melhor experiência para o seu
              cliente.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <FaTools />
          </div>
          <div className="service-about">
            <h4>Seo e Velocidade</h4>
            <p>
              Práticas de SEO para melhor posicionamento do seu site nas
              pesquisas no google, aumentando o tráfego dos usuários e a
              relevância do seu negócio.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <MdDevices />
          </div>
          <div className="service-about">
            <h4>Integração e Automatização</h4>
            <p>
              Completa integração com plataformas de vendas online, redes
              sociais, ferramentas de marketing e sistemas de métricas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
