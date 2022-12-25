import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import "./index.css";

export default function AllFoods() {
  const [data, setData] = React.useState([])
  let url = "https://63a2cab7471b38b206fc1a55.mockapi.io/foods"
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)
      .then(res => res.json()))
      setData(data)
    }
    dataFetch()
  }, [url])
  return (
    <div className="all-food__container">
      <h2 className="all-food__header">All Food Items</h2>
      <div className="all-food__items">
         {data.map(food => {
            return (
              // <Link id="food-item" to={`/rendering`} key={food.id} >
                <FoodItem 
                  key={food.id}
                  food={food}
                />
              // </Link>
            )
         })}
      </div>
    </div>
  )
}
