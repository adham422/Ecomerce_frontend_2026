
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Product from "../pages/Product";
import AboutUs from "../pages/AboutUs";
import { Routes, Route } from "react-router-dom";
import ErrorPages from "../pages/ErrorPages";
import Login from "../pages/Login";
import Register from "../pages/Register";
const AppRouter = () => {
  return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPages />} />
          </Routes> 
  )
}

export default AppRouter
