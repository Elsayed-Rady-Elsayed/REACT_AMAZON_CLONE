import React from "react";
import "./home.css";
import homePageImg from "../../assets/home.jpg";
import { ProductCard } from "../productCard/ProductCard";
import shortid from "shortid";
export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <img src={homePageImg} className="homeLandImg" alt="home image" />
        <div className="home-row">
          <ProductCard
            id={shortid.generate()}
            img=""
            price={44}
            title="the first product here"
            rate={5}
          />
          <ProductCard
            id={shortid.generate()}
            img=""
            price={44}
            title="the first product here"
            rate={5}
          />
        </div>
        <div className="home-row">
          <ProductCard
            id={shortid.generate()}
            img=""
            price={44}
            title="the first product here"
            rate={5}
          />
          <ProductCard
            id={shortid.generate()}
            img=""
            price={44}
            title="the first product here"
            rate={5}
          />
          <ProductCard
            id={shortid.generate()}
            img=""
            price={44}
            title="the first product here"
            rate={5}
          />
        </div>
        <div className="home-row">
          <ProductCard
            id={shortid.generate()}
            img=""
            price={44}
            title="the first product here"
            rate={5}
          />
        </div>
      </div>
    </div>
  );
};
