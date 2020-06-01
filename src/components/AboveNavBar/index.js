import React, { Component } from "react";
import "./index.css";

export default class AboveNavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg above-navbar">
          <div className="d-flex ml-auto">
          <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link above-nav-bar-link">
                Devoluciones & pedidos
              </a>
              <div className="divider divider-sub-navbar mx-2"> </div>
            </div>
            
            <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link above-nav-bar-link">
                Nosotros
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
