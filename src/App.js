import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';



function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes path='/'>
        <Route index element={<Home />}/>
        <Route path='shop' element={<ShopPage />}/>
        <Route path='product/:category/:id' element={<ProductPage />}/>
        <Route path='cart' element={<CartPage />}/> 
        <Route path='register' element={<RegisterPage />}/>       
        <Route path='login' element={<LoginPage />}/>

        {/* <Route path='/contact' element={<Contact />}/>        
        <Route path='/user_details' element={<UserDetails />}/>
        <Route path='/menu/:category/:id' element={<FoodDetails />}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}


export default App;