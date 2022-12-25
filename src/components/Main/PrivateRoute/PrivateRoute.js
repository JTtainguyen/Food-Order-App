import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
  let isAuth = localStorage.getItem("isLoggin")
  return isAuth === "true" ? <Outlet /> : <Navigate to="/signin" />
}
