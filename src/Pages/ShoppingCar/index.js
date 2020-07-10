import React, {Component} from 'react'

import './index.scss'
import './overwrite.scss'
import NavBar from '../../components/NavBar'

import {FiTrash2, FiHeart, FiMinus} from 'react-icons/fi'

import cameraImage from '../../assets/images/cameraImage.jpg'

const icons = {
  size: 20,
}

export default class ShoppingCar extends Component {
  render() {
    return (
      <>
        <NavBar />

        <div className="container shopping-car">
          <div className="row">
            <div className="col-8">
              <div className="products-car-container my-4">
                {[1, 2, 3].map((index, value) => (
                  <div className="card-product-car my-3">
                    <img
                      src={cameraImage}
                      alt=""
                      className="card-product-car-image"
                    />
                    <div className="description-section-product-car ml-3">
                      <p className="">
                        Computadora NOC, con parlantes, teclado y mouse gamer
                      </p>
                      <p className="shipping-container">
                        <span className="shipping"> Envio: </span>
                        Desde Managua a León
                        <FiMinus />
                        <span className="price-shipping"> C$200 </span>
                      </p>

                      <p className="price-text"> C$ 6000 </p>
                      <p className="discount-text">
                        <span className="discount-text-price"> C$7800 </span>
                        <span className="discount-text-number"> -30% </span>
                      </p>
                    </div>
                    <div className="ml-auto card-icons-container">
                      <button className="btn">
                        <FiTrash2 size={icons.size} className="icon-card" />
                      </button>
                      <button className="btn">
                        <FiHeart size={icons.size} className="icon-card" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-4 my-4">
              <div className="summary-container">
                <div className="">
                  <p>
                    {' '}
                    <span className="d-inline-block"> Subtotal: </span> C${' '}
                    {18000.0}{' '}
                  </p>
                  <p className="summary-text d-inline-block">
                    {' '}
                    Envio: C$ {200.0}{' '}
                  </p>
                </div>
                <div className="summary-result mt-1 pt-3">
                  <p className="d-inline-block">
                    {' '}
                    <span className="summary-result-total"> Total: </span>{' '}
                    <span className="summary-result-number"> C$ {18200} </span>{' '}
                  </p>
                </div>
                <button className="btn btn-block btn-buy"> Comprar </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
