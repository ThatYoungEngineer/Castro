import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import Team from './Pages/Team'
import Categories from './Pages/Categories/Categories'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import ErrorPage from './Pages/ErrorPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import RestoreScroll from './Components/RestoreScroll'

import Aos from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

const App = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <Router>
      <ToastContainer />
      <RestoreScroll />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App