import React, { useEffect } from "react";
import FoodItem from "./FoodItem";
import "./index.css";

export default function AllFoods() {
  let url = "https://63a2cab7471b38b206fc1a55.mockapi.io/foods"
  const [data, setData] = React.useState([])
  let [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")) || [])
  let currentArea = localStorage.getItem("currentArea") || ""
  
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)
      .then(res => res.json()))
      setData(data)
      localStorage.setItem("allFoods", JSON.stringify(data))
    }
    dataFetch()
  }, [url])

  let foodList = data.filter((food) => food.area === currentArea)
  
  return (
    <div className="all-food__container">
      <h2 className="all-food__header">{currentArea.charAt(0).toUpperCase() + currentArea.slice(1)} Food Items</h2>
      <div className="all-food__items">
         {foodList.map(food => {
            return (
              <FoodItem 
                key={food.name}
                food={food}
                cart={cart}
                setCart={setCart}
              />
            )
         })}
      </div>
    </div>
  )
}
