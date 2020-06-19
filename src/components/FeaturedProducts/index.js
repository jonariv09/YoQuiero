import React, {Component} from 'react'
import Product from '../../components/Product'
import ProductImage from '../../assets/images/product.jpg'
import './index.scss'

class FeaturedProducts extends Component {
  render() {
    return (
      <>
        <div className="featured-products">
          <div className="lead"> Destacado online </div>
          <div className="row py-4 d-flex">
            {[1, 2, 3, 4, 5].map((index, value) => (
              <div
                key={value}
                className="my-2 col-xl-2 col-lg-3 col-md-4 col-sm-2"
              >
                <Product image={ProductImage} />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default FeaturedProducts
