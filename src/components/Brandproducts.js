import React from "react";
import "./electronics.css";

function Brandproducts() {
  return (
    <>
      <h2 id="brands-heading">Featured Brands Products</h2>
      <div id="brands">
        <div className="brands-card">
          <div id="header" className="card-header">
            <img className="card-img" src="./images/realme.jpg" alt="realme" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Realme</h3>
          </div>
        </div>
        <div className="brands-card">
          <div id="header" className="card-header">
            <img className="card-img" src="./images/lglogo.png" alt="lglogo" />
          </div>
          <div className="card-content">
            <h3 className="card-title">LG</h3>
          </div>
        </div>
        <div className="brands-card">
          <div id="header" className="card-header">
            <img
              className="card-img"
              src="./images/philips.png"
              alt="philips"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Philips</h3>
          </div>
        </div>
        <div className="brands-card">
          <div id="header" className="card-header">
            <img className="card-img" src="./images/nvidia.png" alt="nvidia" />
          </div>
          <div className="card-content">
            <h3 className="card-title">nVidia</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brandproducts;
