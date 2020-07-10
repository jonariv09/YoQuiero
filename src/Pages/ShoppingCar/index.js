import React, {Component} from 'react'

import './index.scss'
import './overwrite.scss'

export default class ShoppingCar extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-8">
                <div className="products-car-container">
                  <div className="card product-car"></div>
                </div>
              </div>

              <div className="col-4">
                <div className="summary-container">
                  <span className="summary-text"> Total: </span>
                  C$ {0.0}
                  <button className="btn btn-buy"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
