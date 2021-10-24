import React from "react";
import "./Info-style.css";
function Info() {
  return (
    <>
      <div className="img_box">
        <div>
          <img
            src="./images/freeshipping.png"
            alt="freeshipping"
            className="Img"
          />
        </div>
        <div>
          <img
            src="./images/fastdelivery.png"
            alt="fastdelivery"
            className="Img"
          />
        </div>
        <div>
          <img src="./images/bigschoice.png" alt="bigchoice" className="Img" />
        </div>
      </div>
    </>
  );
}

export default Info;
