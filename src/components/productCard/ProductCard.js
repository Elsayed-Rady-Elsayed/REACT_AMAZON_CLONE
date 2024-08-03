import React from "react";
import "./product.css";
export const ProductCard = () => {
  return (
    <div className="product">
      <div className="product-inf">
        <p>title</p>
        <p className="product-price">
          <small>$</small>
          <strong>222</strong>
        </p>
      </div>
      <div className="product-rate">
        <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>{" "}
        <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>{" "}
        <ion-icon name="star"></ion-icon>
      </div>
      <img src="" alt="product-image" />
      <button>Add to Basket</button>
    </div>
  );
};
