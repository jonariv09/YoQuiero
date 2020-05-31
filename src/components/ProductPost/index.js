import React, { Component } from "react";
import PostImage from "../../assets/images/men-s-gray-and-black-button-up-shirt-on-mannequin-1086711.jpg";
import { FiGrid } from "react-icons/fi";
import "./index.css";
import "./overwrite.css";

export default class ProductPost extends Component {
  render() {
    return (
      <>
        <div className="card card-post my-2">
          <div className="card-header card-header-post d-flex px-2 py-1">
            <div className="d-flex flex-column align-items-center">
              <p className="p-0 m-0"> Tienda Stranger things </p>
              <p className="p-0 m-0"> 12 de diciembre 2:43am </p>
            </div>
            <div className="ml-auto d-flex align-items-center px-2 py-1">
              Nuevo producto
              <FiGrid className="ml-1" />
            </div>
          </div>
          <img width="100%" src={PostImage} />
          <div className="card-footer card-footer-post"></div>
        </div>
      </>
    );
  }
}
