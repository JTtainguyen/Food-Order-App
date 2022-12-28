import React from "react";

export default function PayItem(props) {
  const [quantity] = React.useState(props.food.quantity)
  
  return (
    quantity && (
      <div className="food-item" key={props.food.id}>
        <img src={props.food.imgLink} alt="" className="food-img"/>
        <div className="food-detail">
          <p className="food-name">{props.food.name}</p>
          <p className="quantity">
            Quantity: <span>{quantity}</span>
          </p>
          <p className="price"> ${props.food.price} VND</p>
        </div>
      </div>
    )
  )
}
