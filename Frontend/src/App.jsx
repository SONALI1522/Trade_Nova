import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from "./landing_page/NotFound";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/product" element={<ProductPage />}/>
      <Route path="/pricing" element={<PricingPage />}/>
      <Route path="/support" element={<SupportPage />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
