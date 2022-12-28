import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./components/Main/SignIn/SignIn"
import Home from "./components/Main/Home/Home";
import Cart from "./components/Main/Cart/Cart";
import AddFood from "./components/Main/AddFood/AddFood";
import Payment from "./components/Main/Payment/Payment";
import PrivateRoute from "./components/Main/PrivateRoute/PrivateRoute"
import FoodDetail from "./components/Main/Home/AllFoods/FoodDetail/FoodDetail";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route element={<PrivateRoute />}>
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path=":foodId" element={<FoodDetail />} />
        <Route path="/addfood" element={<AddFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
