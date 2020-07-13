import React, {Component} from 'react'
import './index.scss'
export default class Navbar1 extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg above-navbar">
          <div className="d-flex ml-auto">
            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="nav-bar-link above-nav-bar-link">
                Devoluciones y pedidos
              </a>
            </div>

            <div className="divider divider-sub-navbar mx-2"> </div>

            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="nav-bar-link above-nav-bar-link">
                Nosotros
              </a>
            </div>

            <div className="divider divider-sub-navbar mx-2"> </div>

            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="nav-bar-link above-nav-bar-link">
                Ayuda
              </a>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
