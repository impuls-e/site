import React from "react"
import "./styles.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function nextnextArrowSlider(props, teste) {
  const actionClick = props.actionClick

  return (
    <div className="nextArrow" onClick={actionClick}>
      <div className="nextArrow-top"></div>
      <div className="nextArrow-bottom"></div>
    </div>
  )
}
