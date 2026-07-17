import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import { addItem, removeItem, clearCart } from "./RTK/slice";
import { fetchProducts } from "./RTK/productSlice";

export default function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productlist = useSelector((state) => state.products.items);
  console.log(productlist);

  const cartSelector = useSelector((state)=>state.cart.items);
  console.log(cartSelector)

  return (
    <>
      <div className="grid">
        {productlist.length &&
          productlist.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.thumbnail} alt="product-image" />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
                <div className="brand">{item.brand}</div>
                <div className="Price">${item.price}</div>
                <div className="Available">{item.availabilityStatus}</div>
              </div>
              {
                cartSelector.find(cartItem=> cartItem.id === item.id)? 
                <button onClick={()=>dispatch(removeItem(item))} className="btn">Remove from Cart</button>

                : 

                <button onClick={() => dispatch(addItem(item))}> Add to Cart </button>
              
              }
              
            </div>
          ))}
      </div>
    </>
  );
}
