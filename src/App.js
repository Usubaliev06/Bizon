// import './App.css';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import Main from './pages/main/Main';
// import AbouteUS from './pages/aboutUs/AboutUs';
// import Products from './pages/products/Products';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import { useState, useEffect } from 'react';
import RoutesApp from '../src/RoutesApp'
import Loader from './components/loader/Loader'


function App() {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 5000);
  }, []);

  return (

    // <BrowserRouter >
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<Main />} />
    //     <Route path='/abouteUs' element={<AbouteUS />} />
    //     <Route path='/products' element={<Products />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <div>

      {loader ? (
        <RoutesApp />
      ) : (<Loader />)}
    </div> 

  );
}

export default App;
