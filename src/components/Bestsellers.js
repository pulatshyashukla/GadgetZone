import React from "react";
import product_card from "../data/product_data";
import "./bestSellers.css";

const Bestsellers = () => {
  console.log(product_card);
  const listItem = product_card.map((item) => (
    <div className="best_card" key={item.id}>
      <div className="best_card_img">
        <img className="best_img" src={item.thumb} />
      </div>
      <div className="card_header">
        <h2 className="best_h2">{item.product_name}</h2>
        <p className="best_p">{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));
  return (
    <div className="main_content">
      <h3 className="best_title">
        <hr />
        Best Sellers
      </h3>

      {listItem}
    </div>
  );
};
export default Bestsellers;
