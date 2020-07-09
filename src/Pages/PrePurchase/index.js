import React, {Component} from 'react'
import NavBar from '../../components/NavBar'

import computadoraGamer from '../../assets/images/computadoraGamer.jpg'

import './index.scss'
import './overwrite.scss'

export default class PrePurchase extends Component {
  render() {
    return (
      <>
        <NavBar />

        <div className="container">
          <div className="row mt-5">
            <div className="col-6">
              <div className="d-flex flex-column align-items-center">
                <img src={computadoraGamer} className="big-image" />
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

              <div className="ranking"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
