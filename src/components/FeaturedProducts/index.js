import React, { Component } from "react";
import Product from '../../components/Product'
import ProductImage from "../../assets/product.jpg";

class FeaturedProducts extends Component {
  render() {
    return (
      <>
        <div className="lead"> Destacado online </div>
        <div className="row py-4 d-flex justify-content-around">
          {[1, 2, 3, 4, 5].map((index, value) => (
            <div key={value} className="col-xl-2">
              <Product image={ProductImage}/>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default FeaturedProducts;
