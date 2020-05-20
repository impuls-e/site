import React from "react"
import { FaWhatsapp } from "react-icons/fa"

import "./styles.css"

export default function floatWhats() {
  return (
    <div className="float">
      <a href="https://wa.me/5548999101220" target="_blank">
        {" "}
        <FaWhatsapp size={40} />
      </a>
    </div>
  )
}
