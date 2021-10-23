import React from "react";
import "./card-style.css";

function Cards(props) {
  return (
    <>
      <div className="card text-center">
        <div className="overflow">
          <img src={props.imgsrc} alt="televison" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo
            eius voluptate
          </p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
