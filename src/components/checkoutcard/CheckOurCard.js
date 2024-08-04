import React from "react";
import "./checkOutCard.css";
import { useAuth } from "../../context/GlobalState";
export const CheckOurCard = ({ id, title, price, rate, img }) => {
  const { dispatch } = useAuth();
  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };
  return (
    <div className="checkOutCard">
      <img src={img} alt="image card" />
      <div className="content">
        <p className="title">{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rate">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>
        <button onClick={removeItem}>Remove From Basket</button>
      </div>
    </div>
  );
};
