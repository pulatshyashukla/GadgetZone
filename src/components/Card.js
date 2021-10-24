import React, { Component } from "react";
import Cards from "./Cards";
import img1 from "./../assets/images/tv2.jpg";
import img2 from "./../assets/images/iphone.png";
import img3 from "./../assets/images/watch.jpg";

class Card extends Component {
  render() {
    return (
      <>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4 overflow">
              <Cards imgsrc={img1} title="Sony Television" />
            </div>
            <div className="col-md-4 overflow">
              <Cards imgsrc={img2} title="Smart Phones" />
            </div>
            <div className="col-md-4 overflow">
              <Cards imgsrc={img3} title="Smart Watches" />
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}

export default Card;
