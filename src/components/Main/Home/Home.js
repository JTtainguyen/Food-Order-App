import React from "react";
import AllFoods from "./AllFoods/AllFoods";
import FoodList from "./FoodListArea/FoodList";

export default function Home() {
  return (
    <section className="home">
      <FoodList />
      <AllFoods />
    </section>
  )
}
