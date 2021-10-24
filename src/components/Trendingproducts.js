import React from "react";
import "./electronics.css";

function Trendingproducts() {
  return (
    <>
      <h2 id="brands-heading">Trending Products</h2>
      <div id="brands">
        <div className="brands-card">
          <div id="header" className="card-header">
            <img
              className="card-img"
              src="./images/Iphone11.png"
              alt="Iphone11"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Iphone 11</h3>
          </div>
        </div>
        <div className="brands-card">
          <div id="header" className="card-header">
            <img className="card-img" src="./images/xps.png" alt="xps" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Dell XPS 13</h3>
          </div>
        </div>
        <div className="brands-card">
          <div id="header" className="card-header">
            <img className="card-img" src="./images/OLEDR.png" alt="Oled R" />
          </div>
          <div className="card-content">
            <h3 className="card-title">LG OLED R</h3>
          </div>
        </div>
        <div className="brands-card">
          <div id="header" className="card-header">
            <img
              className="card-img"
              src="./images/samsungwatch.png"
              alt="samsung watch"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Galaxy Watch Active2</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trendingproducts;
