import React from "react";
import imgLink from "../../assets/icons.png";
import { Link } from "react-router-dom";
import "./header.css";
import { useAuth } from "../../context/GlobalState";
import { auth } from "../../firebase";
export const Header = () => {
  const { user } = useAuth();
  const handleAuthClick = () => {
    if (user) {
      auth.signOut();
    } else {
    }
  };
  return (
    <div className="header">
      <Link to="/" className="header-logo"></Link>
      <div className="header-search">
        <input type="search" className="search-input" />
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <div className="header-controls">
        <Link to={user ? "/" : `/login`}>
          <div
            className="signIn"
            onClick={() => {
              handleAuthClick();
            }}
          >
            <div className="text-top">Hello {user ? user.email : "Guest"}</div>
            <div className="text-down">Sign {user ? "out" : "in"}</div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="orders">
            <div className="text-top">Returns</div>
            <div className="text-down">& Orders</div>
          </div>
        </Link>
        <Link to="/">
          <div className="text">
            <div className="text-top">Your</div>
            <div className="text-down">Prime</div>
          </div>
        </Link>
        <Link to="/chheckout">
          <div className="chheckout">
            <div className="text">
              <div className="shopCart"></div>
              <span>0</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
