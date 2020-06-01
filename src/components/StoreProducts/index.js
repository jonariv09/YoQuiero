import React, { Component } from "react";
import photo from '../../assets/images/product.jpg'
import './index.css'

export default class StoreProducts extends Component {
  render() {
    return (
      <>
        <div className="products p-3">
          <div className="d-flex justify-content-between">
            <span> Productos </span>
            <a href="#" className="">
              Ver todos
            </a>
          </div>

          <div className="products-container">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index, value) => (
                <a href="/404" className="my-2">
                  <img className="thumbnail-products" src={photo} />
                </a>
              ))
            }
          </div>
        </div>
      </>
    );
  }
}
