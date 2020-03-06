import React from "react"
import "./styles.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function prevprevArrowSlider(props, teste) {
  const actionClick = props.actionClick

  return (
    <div className="prevArrow" onClick={actionClick}>
      <div className="prevArrow-top"></div>
      <div className="prevArrow-bottom"></div>
    </div>
  )
}
