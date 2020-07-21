import React, {Component} from 'react'

import image from '../../assets/images/smart-watch.jpg'

import './index.scss'

export default class Products extends Component {
  render() {
    return (
      <>
        <div className="container d-md-none">
          <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, value) => (
              <div className="col-6 col-md-4 col-lg-2">
                <div className="card">
                  <div className="card-header">
                    <img src={image} className="product-image" alt="" />
                  </div>
                  <div className="card-body">
                    <div className="text-description text-muted text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo, quibusdam?
                    </div>

                    <div className="text-price font-weight-bold"> C$450 </div>
                    <div className="text-sold-number text-muted">
                      {' '}
                      523 vendidos{' '}
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}
