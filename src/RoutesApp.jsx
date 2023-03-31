import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages/main/Main';
import AbouteUS from './pages/aboutUs/AboutUs';
import Products from './pages/products/Products';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const RoutesApp = () => {
  return (

    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/abouteUs' element={<AbouteUS />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default RoutesApp;
