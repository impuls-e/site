import React from "react"
import "./styles.css"
import { IoIosPeople } from "react-icons/io"
import { MdDevices } from "react-icons/md"

export default function Services() {
  return (
    <div id="services" className="container services">
      <h4>
        Diminuimos consideravelmente a taxa de rejeição e aumentamos a conversão
        e retenção dos usuários.
      </h4>
      <div className="services-section">
        <div className="service">
          <div className="icon">
            <IoIosPeople />
          </div>
          <div className="service-about">
            <h4>Criação e Otimização</h4>
            <p>
              Desenvolvimento de páginas utilizando a arquitetura JAMSTACK,
              conseguimos trazer uma melhor performance, escalabilidade, mais
              segurança e alta produtividade para o desenvolvedor.
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
