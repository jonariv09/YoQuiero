import React, {Component} from 'react'
import './index.scss'
import img1 from '../../assets/images/img/1.png'
import img2 from '../../assets/images/img/2.png'
import img3 from '../../assets/images/img/3.png'
import img4 from '../../assets/images/img/4.png'
import img5 from '../../assets/images/img/5.png'
import img6 from '../../assets/images/img/6.png'
import img7 from '../../assets/images/img/7.png'
import img8 from '../../assets/images/img/8.png'
import {FaShoppingCart} from 'react-icons/fa'

const styles = {
  iconSize: 15,
}
export default class Slider2 extends Component {
  render() {
    return (
      <>
        <div className="col-11 container color-contenedor d-none d-md-block">
          <h4 className="dec">
            Los productos comestibles Más comprados<a href="#">Ver mas</a>
          </h4>

          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-3">
                    <div className="card">
                      <img src={img1} className="d-block w-100" alt="..." />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$40
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={img2} className="d-block w-100" alt="..." />
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
                      <img src={img3} className="d-block w-100" alt="..." />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$60
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={img4} className="d-block w-100" alt="..." />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$70
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="row">
                  <div className="col-3">
                    <div className="card">
                      <img src={img5} className="d-block w-100" alt="..." />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$75
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={img6} className="d-block w-100" alt="..." />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$2
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={img7} className="d-block w-100" alt="..." />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$30
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card">
                      <img src={img8} className="d-block w-100" alt="..." />
                      <div className="card-body">
                        <p className="card-text btn btn-success btn-sm">
                          <span>
                            <FaShoppingCart size={styles.iconSize} />
                          </span>
                          C$50
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade"
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
              href="#carouselExampleFade"
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
