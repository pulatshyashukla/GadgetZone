import React from "react";
import "./Brands-style.css";
import Brandproducts from "./Brandproducts";
import Trendingproducts from "./Trendingproducts";
import Slider from "./Slider";

function Brands() {
  return (
    <>
      <div id="brand-name">
        <ul className="brand-bar">
          <li className="brand-list">
            <a href="/">Real Me</a>
          </li>
          <li className="brand-list">
            <a href="/">Samsung</a>
          </li>
          <li className="brand-list">
            <a href="/">Voltas</a>
          </li>
          <li className="brand-list">
            <a href="/">LG</a>
          </li>
          <li className="brand-list">
            <a href="/">Philips</a>
          </li>
          <li className="brand-list">
            <a href="/">Vivo</a>
          </li>
          <li className="brand-list">
            <a href="/">MI</a>
          </li>
          <li className="brand-list">
            <a href="/">Whirpool</a>
          </li>
        </ul>
      </div>
      <Slider />
      <Brandproducts />
      <Trendingproducts />
    </>
  );
}

export default Brands;
