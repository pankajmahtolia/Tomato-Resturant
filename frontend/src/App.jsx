import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import VerifyOrder from "./pages/VerifyOrder/VerifyOrder";
import MyOrders from "./pages/MyOrders/MyOrders";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<VerifyOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <AppDownload/>
      <Footer />
    </>
  );
};

export default App;
