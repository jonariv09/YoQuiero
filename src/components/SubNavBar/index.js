import React, { Component } from "react";
import { FcShop } from "react-icons/fc";
import "./index.css";

export default class SubNavBar extends Component {
  render() {
    return (
      <>
        <nav class="navbar sub-navbar">
          <div className="row">
            <div className="col-xl-2">
              <a className="create-store-button" href="https://www.google.com">
                <div className="d-flex align-items-center">
                  <FcShop className="mr-1" />
                  Crea tu tienda
                </div>
              </a>
            </div>

            <div className="col-xl-2 d-flex align-items-center">
              <a className="link text-light" href="https://www.google.com"> Especiales de hoy </a>
            </div>

            <div className="col-xl-2 d-flex align-items-center">
              <a className="link text-light" href="https://www.google.com"> Servicio al cliente </a>
            </div>

            <div className="col-xl-5 d-flex justify-content-center align-items-center">
              <span className="link text-light mr-1"> ¿Todavia no tienes una cuenta? </span> <a href="https://www.google.com"> Registrate gratis </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
