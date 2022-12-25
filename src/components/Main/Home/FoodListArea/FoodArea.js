import React from "react";
import "./index.css"

export default function FoodArea(props) {
  return (
    <div className="food-area__item">
      <img src={props.imgLink} alt="" className="item-img" />
      <h2>{props.country} Foods</h2>
    </div>
  )
}