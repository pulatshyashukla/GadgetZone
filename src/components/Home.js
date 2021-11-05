import React from "react";
import Slider from "./Slider";
import Card from "./Card";
import Bestsellers from "./Bestsellers";
import Homegadgets from "./Homegadgets";
import Store from "./Store";

function Home() {
  return (
    <>
      <div class="btn-group  d-flex justify-content-center mb-2 mt-2">
        <a href="/" class="btn btn-outline-dark me-2">
          Desktop
        </a>
        <a href="/" class="btn btn-outline-dark me-2">
          Television
        </a>
        <a href="/" class="btn btn-outline-dark me-2">
          Smart Phone
        </a>
        <a href="/" class="btn btn-outline-dark me-2">
          Home Gadget
        </a>
        <a href="/" class="btn btn-outline-dark me-2">
          Watches
        </a>
      </div>
      <Slider />
      <Card />
      <Bestsellers />
      <Homegadgets />
      <Store />
    </>
  );
}

export default Home;
