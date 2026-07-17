import React from "react";
import AddToCart from "./AddToCart";

export default function Header() {
  return (
    <>
      <header className="header">
      <div className="logo">
        <h2>ShopEase</h2>
    </div>

    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
        <AddToCart/>
      </header>
    </>
  );
}
