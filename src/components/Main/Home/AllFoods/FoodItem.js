import React from "react";
import "./index.css";

export default function FoodItem(props) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const addCart = (e) => {
    cart.push(props.food)
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  return (
      <div className="food-item__container">
        <img src={props.food.imgLink} alt="" className="food-item__img" />
        <div className="food-item__content">
          <h3 className="food-item__header">{props.food.foodName}</h3>
          <p>
            <i className="fa-solid fa-star"></i>
            <span className="bold">{props.food.rate.star}</span> ({props.food.rate.rateNum})</p>
          <p>{props.food.description}</p>
        </div>
        <div className="control-btns">
          <button className="btn" id="add-to-cart" onClick={e => addCart(e)}>Add to Cart</button>
          <button className="btn" id="pay">Pay</button>
        </div>
      </div>
  )
}
