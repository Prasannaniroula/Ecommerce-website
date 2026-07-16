import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddToCart from './AddToCart'
import { addItem, removeItem, clearCart } from './RTK/slice'
import {fetchProducts} from './RTK/productSlice'

export default function Product() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    const productlist = useSelector((state)=> state.products.items)
    console.log(productlist)
  return (
   <>
    <div className='grid'>
        {
            productlist.length && productlist.map((item)=>(
                <div className='card' key={item.id}>
                    <img src={item.thumbnail} alt='product-image'/>
                    <div className='content'>
                        <div className='title'>{item.title}</div>
                        <div className='description'>{item.description}</div>
                        <div className='category'>{item.category}</div>
                        <div className='Price'>{item.price}</div>
                        <div className='Available'>{item.availabilityStatus}</div>
                    </div>
                </div>
            ))
        }


    </div>
   </>
  )
}
