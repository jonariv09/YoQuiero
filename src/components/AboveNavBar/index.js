import React, { Component } from "react";
import "./index.css";

export default class AboveNavBar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg above-navbar">
          <div className="d-flex ml-auto">
            <a href="https://www.google.com" className="link text-light">
              Devoluciones & pedidos
            </a>
            <div class="divider mx-2"></div>
            <a href="https://www.google.com" className="link text-light">
              Nosotros
            </a>
          </div>
        </nav>
      </>
    );
  }
}
