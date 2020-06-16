import React, {Component} from 'react'
import './index.scss'

import Logo from '../../assets/images/logo.png'
import SpanishImage from '../../assets/images/spanish_language.png'
import EnglishImage from '../../assets/images/english_language.png'
import {FiUser} from 'react-icons/fi'
import {
  AiOutlineQuestionCircle,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from 'react-icons/ai'

const styles = {
  iconSize: 21,
}

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg main-navbar flex-row">
          <div className="row py-1">
            <div className="col-xl-3 d-flex align-items-center">
              <img src={Logo} className="img-logo" alt="" />

              <div className="dropdown ml-4">
                <img
                  src={SpanishImage}
                  alt="..."
                  className="rounded-circle language-icon mr-5 dropdown-toggle language-dropdown"
                  href="#"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <img
                      src={EnglishImage}
                      alt="..."
                      className="rounded-circle language-icon mr-2"
                    />
                    English
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 ml-auto d-flex align-items-center">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control form-control-main-search"
                  aria-label="Sizing example input"
                  placeholder="Buscar"
                />
                <div className="input-group-append search-group-append">
                  <a
                    href="#"
                    className="input-group-text search-text-group"
                    id="inputGroup-sizing-sm"
                  >
                    <AiOutlineSearch
                      className="icon-main-search"
                      size={styles.iconSize}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 ml-auto d-flex align-items-center">
              <div className="ml-auto d-flex justify-content-center">
                <a href="/404" className="item icon-link-navbar">
                  <FiUser size={styles.iconSize} className="icon-item mr-2" />
                  Perfil
                </a>
                <div className="mr-auto divider"> </div>

                <a href="/404" className="item icon-link-navbar">
                  <AiOutlineQuestionCircle
                    size={styles.iconSize}
                    className="icon-item mr-2"
                  />
                  Ayuda
                </a>
                <div className="mr-auto divider"></div>

                <div className="item position-relative">
                  <a href="/404" className="icon-link-navbar">
                    <AiOutlineShoppingCart
                      size={styles.iconSize}
                      className="icon-item mr-2"
                    />
                    Carro
                  </a>
                  <span className="badge badge-shopping-cart"> 2 </span>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-nav-bar d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center dropdown">
              <a
                href="/404"
                className="nav-bar-link dropdown-toggle"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorías
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
              <div className="divider divider-sub-navbar"> </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link">
                Novedades
              </a>
              <div className="divider divider-sub-navbar"> </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link">
                Nuevos productos
              </a>
              <div className="divider divider-sub-navbar"> </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link">
                Comida
              </a>
              <div className="divider divider-sub-navbar"> </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link">
                Ropa
              </a>
              <div className="divider divider-sub-navbar"> </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link">
                Envíos
              </a>
              <div className="divider divider-sub-navbar"> </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link">
                Servicios
              </a>
              <div className="divider divider-sub-navbar"> </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <a href="/404" className="nav-bar-link">
                Lo más vendido
              </a>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
