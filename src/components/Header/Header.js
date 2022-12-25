import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

export default function Header() {
  let [isLoggin, setIsLoggin] = React.useState(localStorage.getItem("isLoggin"))
  let handleClick = (e) => {
    e.target.isActive = false
    localStorage.setItem("isLoggin", false)
    setIsLoggin(!isLoggin)
  }
  useEffect(() => {
  }, [isLoggin])
  return (
    <header id="header">
      <div className="navbar">
        <NavLink className="navbar--item" to="/">Home</NavLink>
        <NavLink className="navbar--item" to="/cart" >Cart</NavLink>
        <NavLink className="navbar--item" to="/payment" >Payment</NavLink>
        {!isLoggin ? 
          <NavLink 
            to="/signin" 
            className="navbar--item signin">
              SignIn
          </NavLink> : 
          <NavLink 
            to="/"
            className="navbar--item logout"
            onClick={e => handleClick(e)}
            >
              LogOut
          </NavLink>}
        
      </div>
    </header>
  )
}
