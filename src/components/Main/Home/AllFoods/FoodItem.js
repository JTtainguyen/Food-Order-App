import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function FoodItem(props) {
  const nav = useNavigate()
  let total = +localStorage.getItem("total") || 0

  const addCart = () => {
    let cartFood = {
      ...props.food,
      quantity: 1,
      id : props.food.id
    }
    let newCart = [...props.cart, cartFood]
    props.setCart(newCart)
    total += props.food.price
    localStorage.setItem("cart", JSON.stringify(newCart))
    localStorage.setItem("total", total)
    alert("Add to card successful!")
  }

  const addPay = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    let cartFood = {
      ...props.food,
      quantity: 1,
      id : props.food.id
    }
    let newCart = [...cart, cartFood]
    total += props.food.price
    localStorage.setItem("cart", JSON.stringify(newCart))
    localStorage.setItem("total", total)
    nav("/payment")
  }

  const handleClickFood = () => {
    nav(`/${props.food.id}`)
  }

  return (
      <div className="food-item__container">
        <img src={props.food.imgLink} alt="" className="food-item__img" onClick={handleClickFood}/>
        <div className="food-item__content">
          <h3 className="food-item__header" onClick={handleClickFood}>{props.food.name}</h3>
          <p>
            <i className="fa-solid fa-star"></i>
            <span className="bold">{props.food.rate.star}</span> ({props.food.rate.rateNum})</p>
          <p>{props.food.description}</p>
        </div>
        <div className="control-btns">
          <button className="btn" id="add-to-cart" onClick={addCart}>Add to Cart</button>
          <button className="btn" id="pay" onClick={addPay}>Pay</button>
        </div>
      </div>
  )
}
