import React, {Component} from 'react'
import './index.scss'
import camisa from '../../assets/images/img/camisa.png'
import parlante from '../../assets/images/img/parlante.png'
import computadora from '../../assets/images/img/computadora.png'
import celulares from '../../assets/images/img/celulares.png'
import zapatos1 from '../../assets/images/img/zapatos1.png'
import camisamujer from '../../assets/images/img/camisamujer.png'
import capote from '../../assets/images/img/capote.png'
import zapatos2 from '../../assets/images/img/zapatos2.png'

import {FaShoppingCart} from 'react-icons/fa'
const styles = {
  iconSize: 15,
}
export default class Slider1 extends Component {
  render() {
    return (
      <>
        <br></br>
        <div className="col-11 container color-contenedor">
          <h4 className="dec">
            Los productos mas comprados<a href="#">Ver mas</a>
          </h4>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              {/*Carrusel 1*/}
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-3">
                    <div className="card">
                      <img src={camisa} className="d-block w-100" alt="uno" />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$120
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={parlante} class="d-block w-100" alt="dos" />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$124
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={computadora} class="d-block w-100" alt="tre" />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$10,800
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={celulares} class="d-block w-100" alt="cuatro" />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$8,200
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*fin Carrusel 1*/}

              {/*Carrusel 2*/}
              <div class="carousel-item">
                <div className="row">
                  <div className="col-3">
                    <div className="card">
                      <img src={zapatos1} class="d-block w-100" alt="cinco" />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$341
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={camisamujer} class="d-block w-100" alt="seis" />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$421
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={capote} class="d-block w-100" alt="siete" />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$332
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={zapatos2} class="d-block w-100" alt="ocho" />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$180
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*fin Carrusel 2*/}
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
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
              href="#carouselExampleControls"
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
