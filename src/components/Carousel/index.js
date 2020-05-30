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
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src={Banner1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Banner3} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </>
    );
  }
}
