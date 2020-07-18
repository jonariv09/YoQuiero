import React, {Component} from 'react'
import NavBar from '../../components/Navbar'
import Navbar3 from '../../components/Navbar3'
import CounterPrepurchase from '../../components/CounterPrepurchase'

import computadoraGamer from '../../assets/images/computadoraGamer.jpg'

import {FiStar} from 'react-icons/fi'

import './index.scss'
import './overwrite.scss'

export default class PrePurchase extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Navbar3 />

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

                <CounterPrepurchase />
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
