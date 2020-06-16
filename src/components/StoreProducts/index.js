import React, {Component} from 'react'
import photo from '../../assets/images/product.jpg'
import './index.scss'

export default class StoreProducts extends Component {
  render() {
    return (
      <>
        <div className="products p-3">
          <div className="d-flex justify-content-between">
            <span> Productos </span>
          </div>

          <div className="products-container">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index, value) => (
              <a href="/404" className="thumbnail my-1" key={value}>
                <img className="thumbnail-image" src={photo} alt="" />
              </a>
            ))}
          </div>

          <a href="/404" className="d-block text-right mt-2">
            Ver mas ...
          </a>
        </div>
      </>
    )
  }
}
