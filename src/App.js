import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MarketProvider from "./Contexts/MarketContext"



function App(){
  return(
    <div>
      <MarketProvider>
        <BrowserRouter>
          <Routes path='/'>
            <Route index element={<Home />}/>
            <Route path='shop' element={<ShopPage />}/>
            <Route path='product/:category/:id' element={<ProductPage />}/>
            <Route path='cart' element={<CartPage />}/> 
            <Route path='register' element={<RegisterPage />}/>       
            <Route path='login' element={<LoginPage />}/>      
          </Routes>
        </BrowserRouter>
      </MarketProvider>
      
    </div>
  )
}


export default App;