import React, {Component} from 'react'
import uno from '../../assets/images/1.png'
import dos from '../../assets/images/2.png'
import tres from '../../assets/images/3.png'
import cuatro from '../../assets/images/4.png'
import cinco from '../../assets/images/5.png'
import seis from '../../assets/images/6.png'
import baigon from '../../assets/images/img/baigon.png'
import bicicleta from '../../assets/images/img/bicicleta.png'
import reloj from '../../assets/images/img/reloj.png'
import mochila from '../../assets/images/img/mochila.png'

export default class Carousel extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide d-none d-md-block"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={uno} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={dos} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={tres} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cuatro} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cinco} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={seis} class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <br></br>
        <div className="container color-contenedor d-none d-md-block">
          <div className="row text-align-center">
            <div className="col-3">
              <div className="card">
                <img src={baigon} className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={bicicleta} className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={reloj} className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={mochila} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
