import React from "react";
import { Outlet, useParams } from "react-router-dom";
import "./index.css"

export default function FoodDetail() {
  const data = JSON.parse(localStorage.getItem("allFoods") || "[]")
  const params = useParams()
  let foodItem = data.find((food) => food.id === params.foodId)

  return (
    <>
      <div className="food-detail__container">
        <img 
          src={foodItem.imgLink} 
          alt="" 
          className="food-detail__img"/>
        <h3 className="food-detail__header">{foodItem.name}</h3>
        <p className="food-detail__rate">
          <i className="fa-solid fa-star"></i>
          <span className="bold">{foodItem.rate.star}</span> (11)
        </p>
        <p className="location">Hanoi, Vietnam</p>
        <p className="food-detail__desc">{foodItem.description}</p>

        {/* <ul className="comment-list">
          <li className="comment-item">
            <p className="comment content">This kind of food is so delicious</p>
          </li>
        </ul>
        */}
        
      </div> 
      <Outlet />
    </>
  );
}
