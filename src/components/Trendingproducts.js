import React from "react";
import "./electronics.css";
import trendingPro_data from "../data/trendingPro_data";

const Trendingproducts = () => {
  const listItem = trendingPro_data.map((item) => (
    <div className="brands-card" key={item.id}>
      <div id="header" className="card-header">
        <img className="card-img" src={item.thumb} alt={item.product_name} />
      </div>

      <div className="card-content">
        <h3 className="card-title">{item.product_name}</h3>
        <p className="card-description">{item.description}</p>
        <div className="card-btn">Add to cart</div>
      </div>
    </div>
  ));

  return (
    <>
      <h2 id="brands-heading">Trending Products</h2>
      <div id="brands">{listItem}</div>
    </>
  );
};

export default Trendingproducts;
