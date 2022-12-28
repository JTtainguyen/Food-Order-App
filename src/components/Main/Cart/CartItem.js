import React from "react";

export default function CartItem(props) {
  const [quantity, setQuantity] = React.useState(props.food.quantity)
  let newCart
  const handleDecrease = () => {
    setQuantity(quantity - 1)
    newCart = props.cart.map(item => {
      console.log(item.id, props.food.id)
      if (item.id === props.food.id) {
        return {
          ...item,
          quantity: quantity - 1
        }
      }
      return item
    })    
    props.setTotal(props.total - props.food.price)
    props.setCart(newCart)
  }

  const handleIncrease = () => {
    setQuantity(pre => {
      return pre + 1
    })
    newCart = props.cart.map(item => {
      if (item.id === props.food.id) {
        return {
          ...item,
          quantity: quantity + 1
        }
      }
      return item
    })   
    props.setTotal(preTotal => preTotal + props.food.price)
    props.setCart(newCart)
  }
  return (
    quantity && (
      <div className="food-item" key={props.food.id}>
        <img src={props.food.imgLink} alt="" className="food-img"/>
        <div className="food-detail">
          <p className="food-name">{props.food.name}</p>
          <p className="quantity">
            <button onClick={handleDecrease}>-</button>
            Quantity: <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </p>
          <p className="price"> ${props.food.price} VND</p>
        </div>
      </div>
    )
  )
}
