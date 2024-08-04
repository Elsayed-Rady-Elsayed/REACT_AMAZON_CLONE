import React from "react";
import "./product.css";
import { useAuth } from "../../context/GlobalState";
export const ProductCard = ({ id, title, price, rate, img }) => {
  const { dispatch, basket } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rate: rate,
        img: img,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-inf">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rate">
        <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>{" "}
        <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>{" "}
        <ion-icon name="star"></ion-icon>
      </div>
      <img src={img} alt="product-image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};
