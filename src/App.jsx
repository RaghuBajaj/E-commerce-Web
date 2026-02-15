import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import Men from "./Pages/men/Men.jsx";
import Women from "./Pages/women/Women.jsx";
import Kids from "./Pages/kids/Kids.jsx";
import Login from "./Pages/login/Login.jsx";
import Cart from "./Pages/cart/Cart.jsx";
import Navbar from "./Components/navbar/Navbar.jsx";
import Product from "./Pages/product/Product.jsx";
import Order from "./Pages/order/Order.jsx";
import Checkout from "./Pages/checkout/Checkout.jsx";

function App() {
  return (
    <div className="app">
      <div className="nav_app">
        <Navbar />
      </div>
      <div className="page_container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/kids" element={<Kids />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;