import React, { useEffect } from "react";
import FoodArea from "./FoodArea";
import "./index.css"

export default function FoodList() {
  const [area, setArea] = React.useState(localStorage.getItem("currentArea") || "")
  useEffect(() => {
    localStorage.setItem("currentArea", area)
  }, [area])
  return (
    <div className="food-area__container">
      <h1 className="food-area__header">Food List</h1>
      <div className="food-area__items">
        <FoodArea country="Chinese" imgLink="https://media.istockphoto.com/id/483120255/photo/asian-oranage-chicken-with-green-onions.jpg?s=612x612&w=0&k=20&c=0T_g_J5OSnmCei1Slgr1128wzAhzceRvLjd94R3gkgs=" setArea={setArea}/>
        <FoodArea setArea={setArea} country="Japanese" imgLink="https://thumbs.dreamstime.com/b/traditional-japanese-food-6723440.jpg" />
        <FoodArea setArea={setArea} country="European" imgLink= "https://thumbs.dreamstime.com/b/assortment-dishes-european-cuisine-background-food-top-view-free-space-your-text-164725202.jpg" />
        <FoodArea setArea={setArea} country="Thailand" imgLink="https://media.istockphoto.com/id/1161110617/photo/most-famous-thai-foods-red-curry-pork-green-curry-pork-chicken-coconut-soup-or-thai-in-names.jpg?s=612x612&w=0&k=20&c=cauKV0MVYL1kc8Ovoa07RZdjAPNtY8Fq9qVJCP3dG3Y=" />
        <FoodArea setArea={setArea} country="Vietnamese" imgLink="https://media.istockphoto.com/id/1253793642/photo/traditional-asian-dishes-for-family-dinner.jpg?b=1&s=170667a&w=0&k=20&c=bkP01VkMFCffHA-gX5nAr4z2HnRdgNqQGn8BLiOCxWk=" />
        <FoodArea setArea={setArea} country="Korean" imgLink="https://img.freepik.com/free-photo/korean-food-kim-bap-steamed-rice-with-vegetables-seaweed_1150-42977.jpg?w=2000" />
      </div>
    </div>
  )
}
