import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AbouteUS from './pages/abouteUs/AbouteUS';
import Products from './pages/products/Products';

function App() {
  return (
    
<BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/abouteUs' element={<AbouteUS />} />
        <Route path='/products' element={<Products/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

   
  );
}

export default App;
