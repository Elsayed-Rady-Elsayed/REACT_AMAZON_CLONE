import React from "react";
import "./checkout.css";
import { CheckOurCard } from "../checkoutcard/CheckOurCard";
import checkOutAd from "../../assets/checkoutAd.jpg";
import { useAuth } from "../../context/GlobalState";
import { SubTotal } from "../subtotal/SubTotal";
export const CheckOut = () => {
  const { user, basket } = useAuth();
  const showBasket = basket.map((el, idx) => {
    return (
      <CheckOurCard
        key={idx}
        id={el.id}
        title={el.title}
        img={el.img}
        rate={el.rate}
        price={el.price}
      />
    );
  });
  return (
    <div className="checkout">
      <div className="checkOutLeft">
        <img src={checkOutAd} className="adv" alt="img" />
        <div className="priceAndProcess">
          <SubTotal />
        </div>
      </div>
      <h3 className="text-top">Hello {user ? user.email : "Guest"}</h3>
      <h2>Your Shopping Basket</h2>
      <hr />
      <div>{showBasket}</div>
    </div>
  );
};
