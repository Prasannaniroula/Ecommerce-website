import React from 'react'
import { useDispatch } from 'react-redux'
import AddToCart from './AddToCart'
import { addItem, removeItem, clearCart } from './RTK/slice'

export default function Product() {
    const dispatch = useDispatch()
  return (
   <>
   
   
   
   <section className="products">

    <h1>Our Products</h1>

    <button className='remove' onClick={()=>dispatch(clearCart(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Clear cart
            </button>

    <div className="product-container">
  

        <div className="product-card">
            <img src="https://www.neostore.com.np/assets/uploads/Neone_Products-3053.JPG" alt="Product"/>

            <h3>Wireless Headphones</h3>

            <div className="rating">
                ⭐⭐⭐⭐⭐
            </div>

            <p className="price">$49.99</p>

            <button onClick={()=>dispatch(addItem(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart
            </button>
            <button className='remove' onClick={()=>dispatch(removeItem(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Remove from cart
            </button>
        </div>

        <div className="product-card">
            <img src="https://img.drz.lazcdn.com/static/np/p/58cc2e35dc7d872d6d2d72a81aa1ec2b.jpg_720x720q80.jpg" alt="Product"/>

            <h3>Smart Watch</h3>

            <div className="rating">
                ⭐⭐⭐⭐☆
            </div>

            <p className="price">$79.99</p>

            <button onClick={()=>dispatch(addItem(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart
            </button>
            <button className='remove' onClick={()=>dispatch(removeItem(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Remove from cart
            </button>
        </div>

        <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmos41SlXDI14DJ7SvcQ9eh53hK_X7De4N4ynz6-yUD5FMSXbw4fhl6MQ&s=10" alt="Product"/>

            <h3>Bluetooth Speaker</h3>

            <div className="rating">
                ⭐⭐⭐⭐⭐
            </div>

            <p className="price">$59.99</p>

            <button onClick={()=>dispatch(addItem(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart
            </button>
            <button className='remove' onClick={()=>dispatch(removeItem(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Remove from cart
            </button>
        </div>

        <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfDYv7nsaj004DlT1S1c5n3Oe9s7ifY2bNk_2pyxRxxAPNJqV3HgUW4w&s=10" alt="Product"/>

            <h3>Gaming Mouse</h3>

            <div className="rating">
                ⭐⭐⭐⭐☆
            </div>

            <p className="price">$29.99</p>

            <button onClick={()=>dispatch(addItem(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart
            </button>
            <button className='remove' onClick={()=>dispatch(removeItem(1))}>
                <i className="fa-solid fa-cart-shopping"></i>
                Remove from cart
            </button>
        </div>

    </div>

</section>
 
   
   
   
   </>
  )
}
