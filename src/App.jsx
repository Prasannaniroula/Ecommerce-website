import React from 'react'
import Header from './Header'
import Product from './Product'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import CartList from './CartList'

export default function() {
  return (
   <>

      <Header/>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/cart' element={<CartList/>}/>
      </Routes>
      

   </>
  )
}
