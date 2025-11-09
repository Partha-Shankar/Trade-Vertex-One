import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './landingPage/Home/HomePage';
import AboutPage from './landingPage/About/AboutPage';
import PricingPage from './landingPage/Pricing/PricingPage';
import ProductsPage from './landingPage/Products/ProductsPage';
import SupportPage from './landingPage/Support/SupportPage';
import Signup from './landingPage/Signup/Signup';
import NavBar from './landingPage/NavBar';
import Footer from './landingPage/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/support' element={<SupportPage/>} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/products' element={<ProductsPage/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
  <Footer />
  </BrowserRouter>
);