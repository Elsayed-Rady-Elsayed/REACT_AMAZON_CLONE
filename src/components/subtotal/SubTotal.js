import React from "react";
import "./subTotal.css";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";
export const SubTotal = () => {
  const { basket } = useAuth();
  const nav = useNavigate();
  const getBasketTotal = (basket) => {
    return basket.reduce((a, b) => {
      return a + b.price;
    }, 0);
  };
  return (
    <div className="subTotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <div>
            SubTotal ({basket.length} items): <strong>{value}</strong>
          </div>
        )}
      />
      <div>
        <input type="checkbox" />
        <span>this order contain a gift</span>
      </div>
      <button
        onClick={() => {
          nav("/payment");
        }}
      >
        Proceed to checkout
      </button>
    </div>
  );
};
