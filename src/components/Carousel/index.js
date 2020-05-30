import React, { Component } from "react";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.jpg";

export default class Carousel extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner rounded">
            <div class="carousel-item active">
              <img src={Banner1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Banner2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Banner3} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </>
    );
  }
}
