import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function AddToCart() {
    const cartCount = useSelector((state)=>state.cart.items)
    console.log(cartCount.length)
  return (
    <>
    <Link to='/cart'>
    <div className="cart">
        <i className="fas fa-shopping-cart"/>
        <span className="cart-count">{cartCount.length}</span>
    </div>
    </Link>
    </>
  )
}
