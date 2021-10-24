import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "./../assets/images/slider1.png";
import slider2 from "./../assets/images/slider2.png";
import slider3 from "./../assets/images/slider3.png";
// import { View, Image, StyleSheet } from 'react-native';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slider1} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>Gaming Computer</h3>
          <p>Buy amazing gaming and office computer at very low prices.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slider2} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Buy Smart Phone</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slider3} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Buy Laptops</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
