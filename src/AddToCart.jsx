import React from 'react'
import { useSelector } from 'react-redux'

export default function AddToCart() {
    const cartCount = useSelector((state)=>state.cart.value)
    console.log(cartCount)
  return (
    <>
    <div className="cart">
        <i className="fas fa-shopping-cart"/>
        <span className="cart-count">{cartCount}</span>
    </div>
    </>
  )
}
