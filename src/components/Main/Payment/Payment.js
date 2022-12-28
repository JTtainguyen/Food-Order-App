import React from "react";
import PayForm from "./PayForm";
import PayItem from "./PayItem";
import "./index.css"

export default function Payment() {
  let cart = JSON.parse(localStorage.getItem("cart"))
  const total = +localStorage.getItem("total")

  return (
    <div className="cart-container">
      <h1 className="cart-header">Ordered Food</h1>
      <div className="food-items">
        {cart.map(food => <PayItem total={total} food={food} key={food.id} />)}
      </div>
      <h1 className="total">Total: <span>{total} VND</span></h1>
      <div className="pay-form">
        <PayForm />
      </div>
    </div>
  )
}
