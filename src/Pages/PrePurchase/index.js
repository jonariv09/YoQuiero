import React, {Component} from 'react'
import NavBar from '../../components/NavBar'

import computadoraGamer from '../../assets/images/computadoraGamer.jpg'

import {FiStar, FiMinusSquare, FiPlusSquare} from 'react-icons/fi'

import './index.scss'
import './overwrite.scss'

export default class PrePurchase extends Component {
  constructor(props) {
    super(props)

    this.state = {quantity: 1, priceAdded: 20000, productPrice: 20000}

    this.handleMinusQuantity = this.handleMinusQuantity.bind(this)
    this.handleMoreQuantity = this.handleMoreQuantity.bind(this)
  }

  handleMinusQuantity() {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      })

      this.setState({
        priceAdded: this.state.priceAdded - this.state.productPrice,
      })
    }
  }

  handleMoreQuantity() {
    this.setState({
      quantity: this.state.quantity + 1,
    })

    this.setState({
      priceAdded: this.state.priceAdded + this.state.productPrice,
    })
  }

  render() {
    return (
      <>
        <NavBar />

        <div className="container pre-purchase">
          <div className="row mt-5">
            <div className="col-6">
              <div className="d-flex flex-column align-items-center">
                <img src={computadoraGamer} className="big-image" alt="" />
              </div>
              <div className="small-images">
                <img src={computadoraGamer} className="small-image" alt="" />
                <img src={computadoraGamer} className="small-image" alt="" />
              </div>
            </div>
            <div className="col-6 pt-5">
              <p className="h4 text-muted text-header">
                Computadora NOC, con parlantes, teclado y mouse gamer
              </p>
              <p className="text-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                id lacus vehicula, dapibus mi id, sollicitudin enim. Sed
                tincidunt dui arcu, at maximus purus pretium sed. Suspendisse
                volutpat viverra imperdiet. Vivamus lacinia lectus quis
                convallis efficitur. Maecenas a mi lobortis, malesuada velit id,
                bibendum neque.
              </p>

              <div className="ranking-container my-4">
                <FiStar className="ranking-star" />
                <FiStar className="ranking-star" />
                <FiStar className="ranking-star" />
                <FiStar className="ranking-star" />
                <FiStar className="ranking-star" />
              </div>

              <div>
                <p>
                  <span className="pr-3 text-muted"> Fabricante: </span> NOC
                </p>
                <p>
                  <span className="pr-3 text-muted"> Disponibilidad: </span> 5
                  en stand
                </p>
                <p>
                  <span className="pr-3 text-muted"> Envio: </span> C$ 25
                </p>

                <p className="font-weight-bold">
                  <span className="pr-3 text-muted"> Precio: </span> C${' '}
                  {this.state.priceAdded}
                </p>

                <div className="quantity-container">
                  <span className="text-muted"> Cantidad: </span>

                  <button
                    className="quantity-less-button btn"
                    onClick={this.handleMinusQuantity}
                  >
                    <FiMinusSquare />
                  </button>

                  <span className="quantity-number">{this.state.quantity}</span>

                  <button
                    className="quantity-more-button btn"
                    onClick={this.handleMoreQuantity}
                  >
                    <FiPlusSquare />
                  </button>
                </div>
              </div>

              <div className="buttons-container mt-4 mb-5">
                <button type="button" className="btn btn-buy">
                  Comprar
                </button>
                <button type="button" className="btn btn-add-car">
                  Agregar al Carro
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
