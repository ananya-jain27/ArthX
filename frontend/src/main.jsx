import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css'

import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/login/Login.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import ProductPage from "./landing_page/product/ProductPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";

import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import PageNotFound from "./landing_page/PageNotFound.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <HomePage/>
  // </StrictMode>,

  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
