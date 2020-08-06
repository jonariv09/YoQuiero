import React, {Component} from 'react'

import image1 from '../../assets/images/products/image1.jpg'
import image2 from '../../assets/images/products/image2.jpg'
import image3 from '../../assets/images/products/image3.jpg'
import image4 from '../../assets/images/products/image4.jpg'
import image5 from '../../assets/images/products/image5.jpg'
import image6 from '../../assets/images/products/image6.jpg'
import image7 from '../../assets/images/products/image7.jpg'
import image8 from '../../assets/images/products/image8.jpg'
import image9 from '../../assets/images/products/image9.jpg'
import image10 from '../../assets/images/products/image10.jpg'

import './index.scss'
import './overwrite.scss'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
]

export default class Product extends Component {
  render() {
    return (
      <>
        <div className="container d-md-none product-container">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-6 col-md-4 col-lg-2" key={index}>
                <div className="card">
                  <div className="card-header">
                    <img src={image} className="product-image" alt="" />
                  </div>
                  <div className="card-body">
                    <div className="text-description text-muted text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo, quibusdam?
                    </div>

                    <div className="text-price font-weight-bold"> C$450</div>
                    <div className="text-sold-number text-muted">
                      {' '}
                      523 vendidos{' '}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}
