import React from 'react'
import { Navbar } from '../component/Navbar/Navbar';
import { Home } from '../component/Home/Home';
import Profile from '../component/Profile/Profile';
import Cart from "../component/Cart/Cart";
import { RestaurantDetail } from '../component/Restaurant/RestaurantDetail';
import Orders from '../component/Profile/Orders';
import { Route, Routes } from "react-router-dom";
import Auth from '../component/Auth/Auth';

function CustomerRoute() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}

export default CustomerRoute