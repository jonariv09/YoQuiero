import React, {Component} from 'react'
import './index.scss'
import ropa from '../../assets/images/img/ropa.png'
import verdureria from '../../assets/images/img/verdureria.png'
import zapateria from '../../assets/images/img/zapateria.png'
import panaderia from '../../assets/images/img/panaderia.png'
import farmacia from '../../assets/images/img/farmacia.png'
import distribuidora from '../../assets/images/img/distribuidora.png'
import repuestos from '../../assets/images/img/repuestos.png'
import pulperia from '../../assets/images/img/pulperia.png'

export default class Slider3 extends Component {
  render() {
    return (
      <>
        <br></br>
        <div className="col-11 container color-contenedor decoracion d-none d-md-block">
          <h4 className="dec">
            Tiendas de tu Zona
            <a href="#">Ver mas</a>
          </h4>
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-interval="10000">
                <div className="row">
                  <div className="col-3">
                    <img src={ropa} class="d-block w-100" alt="..." />
                  </div>
                  <div className="col-3">
                    <img src={verdureria} class="d-block w-100" alt="..." />
                  </div>
                  <div className="col-3">
                    <img src={zapateria} class="d-block w-100" alt="..." />
                  </div>
                  <div className="col-3">
                    <img src={panaderia} class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>

              <div class="carousel-item" data-interval="10000">
                <div className="row">
                  <div className="col-3">
                    <img src={farmacia} class="d-block w-100" alt="..." />
                  </div>
                  <div className="col-3">
                    <img src={distribuidora} class="d-block w-100" alt="..." />
                  </div>
                  <div className="col-3">
                    <img src={repuestos} class="d-block w-100" alt="..." />
                  </div>
                  <div className="col-3">
                    <img src={pulperia} class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleInterval"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleInterval"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <button className="btn btn-warning btn-sm">Ve a comprar</button>
        </div>
      </>
    )
  }
}
