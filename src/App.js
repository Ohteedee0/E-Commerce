
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';

import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Footer from './Components/Footer/Footer';
import men_banner from './men banner.jpeg';
import woman_banner from './woman banner.jpeg';
import kids_banner from './kids banner.jpeg';
import Men from './Pages/Men';
import Kids from './Pages/Kids';
import Women from './Pages/Women';
import ShopCategory from './Pages/Shopcategory';



function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/woman' element={<Women/>} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/shopcategory' element={<ShopCategory/>} />
        <Route path='/product' element={<Product/>} />
        <Route path=':productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Loginsignup/>} />


      </Routes>
      <Footer/>

      </BrowserRouter>
  
    

    </div>
  );
}

export default App;
