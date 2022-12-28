import React from "react";
import "./index.css"

export default function FoodArea(props) {
  const handleArea = () => {
    props.setArea(props.country.toLowerCase())
    window.location.reload()
  }
  return (
    <div className="food-area__item" onClick={handleArea}>
      <img src={props.imgLink} alt="" className="item-img" />
      <h2>{props.country} Foods</h2>
    </div>
  )
}
