import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css"

export default function FoodDetail() {
  const addCart =  () => {

  }

  return (
    <>
      <div className="food-detail__container">
        <img 
          src="https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg" 
          alt="" 
          className="food-detail__img"/>
        <h3 className="food-detail__header">Banh mi Pho Co</h3>
        <p className="food-detail__rate">
          <i className="fa-solid fa-star"></i>
          <span className="bold">4.2</span> (11)
        </p>
        <p className="location">Hanoi, Vietnam</p>
        <p className="food-detail__desc">Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion</p>

        <ul className="comment-list">
          <li className="comment-item">
            <p className="comment content">This kind of food is so delicious</p>
          </li>
        </ul>

        
      </div>
      <Outlet />
    </>
  );
}
