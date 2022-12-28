import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import "./index.css"

export default function Cart() {
  const nav = useNavigate()
  let initTotal = 0
  let [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart") || "[]"))
  const [total, setTotal] = React.useState(+localStorage.getItem("total") ||initTotal)
  cart.forEach(item => initTotal += item.price)

  const handlePay = () => {
    nav("/payment")
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("total", total)
  }, [total, cart])

  return (
    <div className="cart-container">
      <h1 className="cart-header">Ordered Food</h1>
      <div className="food-items">
        {cart.map(food => <CartItem cart={cart} total={total} food={food} key={Math.random()} setTotal={setTotal} setCart={setCart}/>)}
      </div>
      <h1 className="total">Total: <span>{total} VND</span></h1>
      <button className="pay" onClick={handlePay}>Pay</button>
    </div>
  )
}
