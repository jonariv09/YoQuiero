import React, {Component} from 'react'

import './index.scss'
import './overwrite.scss'
import NavBar1 from '../../components/Navbar1/index.js'
import NavBar2 from '../../components/Navbar2/index.js'
import Navbar3 from '../../components/Navbar3'

import {FiTrash2, FiHeart, FiMinus} from 'react-icons/fi'

import cameraImage from '../../assets/images/cameraImage.jpg'
import Navbar1 from 'components/Navbar1'

const icons = {
  size: 20,
}

const products = [
  {id: 1, price: 500, amount: 1},
  {id: 2, price: 600, amount: 1},
  {id: 3, price: 900, amount: 1},
  {id: 4, price: 1000, amount: 1},
]

export default class ShoppingCar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subtotal: 0,
      total: 0,
    }

    this.handleMinusQuantity = this.handleMinusQuantity.bind(this)
    this.handleMoreQuantity = this.handleMoreQuantity.bind(this)
  }

  calculateSubtotal() {
    let subtotal = 0

    products.map(
      (product, index) => (subtotal += product.price * product.amount)
    )
    this.setState({subtotal})
  }

  handleMinusQuantity(id) {
    // products.map((product, index) => {
    //   if (index + 1 === id) {
    //     this.calculateSubtotal()
    //   }
    // })
  }

  handleMoreQuantity() {
    // this.setState({ subtotal:  })
    this.calculateSubtotal()
  }

  render() {
    return (
      <>
        <NavBar1 />
        <NavBar2 />
        <Navbar3 />

        <div className="container shopping-car">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="products-car-container my-4">
                {products.map((product, index) => (
                  <div className="card-product-car my-3">
                    <img
                      src={cameraImage}
                      alt=""
                      className="card-product-car-image"
                    />
                    <div className="description-section-product-car ml-3">
                      <p className="title-description">
                        Computadora NOC, con parlantes, teclado y mouse gamer
                      </p>

                      <div className="information-description">
                        <p className="shipping-container">
                          <span className="shipping"> Envio: </span>
                          Desde Managua a León
                          <FiMinus />
                          <span className="price-shipping"> C$200 </span>
                        </p>

                        <p className="price-text"> C$ {product.price} </p>

                        <Counter
                          onMinusQuantity={this.handleMinusQuantity()}
                          onMoreQuantity={this.handleMoreQuantity}
                        />

                        <p className="discount-text">
                          <span className="discount-text-price">
                            C$ {product.price + product.price * 0.3}
                          </span>
                          <span className="discount-text-number"> -30% </span>
                        </p>
                      </div>
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

            <div className="col-12 col-md-4 my-4">
              <div className="summary-container">
                <div className="">
                  <p>
                    <span className="d-inline-block"> Subtotal: </span> C${' '}
                    {this.state.subtotal}
                  </p>
                  <p className="summary-text d-inline-block">
                    Envio: C$ {100.0}
                  </p>
                </div>
                <div className="summary-result mt-1 pt-3">
                  <p className="d-inline-block">
                    <span className="summary-result-total"> Total: </span>
                    <span className="summary-result-number">
                      C$ {this.state.subtotal + 100}
                    </span>
                  </p>
                </div>
                <button className="btn btn-block btn-buy"> Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
