import React, {Component} from 'react'
import image from '../../assets/images/storeProduct.jpg'

import {FiPlus} from 'react-icons/fi'

import './index.scss'

const icon = {
  size: 50,
}

export default class ProductsSellerProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="row main-section pt-3 px-3">
          <div className="col-xl-3">
            <div className="add-product-card card">
              <button className="add-product-button btn">
                <FiPlus size={icon.size} />
              </button>
              <div className="d-flex justify-content-center py-1 text-muted">
                Crear producto
              </div>
            </div>
          </div>

          <div className="col-xl-9">
            <div className="row products-container">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index, value) => (
                <div className="product">
                  <a href="/404">
                    <img src={image} className="rounded product-image" alt="" />
                  </a>
                  <span className="d-block pt-1"> C$ 00.00 </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}
