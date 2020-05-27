import React, { Component } from "react";
import "./index.css";

import Logo from "../../assets/logo.jpeg";
import SpanishImage from "../../assets/spanish_language.png";
import EnglishImage from "../../assets/english_language.png";
import { FiUser } from "react-icons/fi";
import {
  AiOutlineQuestionCircle,
  AiOutlineShoppingCart,
  AiOutlineSearch
} from "react-icons/ai";
import "../../css/Overwrite.css";

const styles = {
  iconSize: 21
};

export default class NavBar extends Component {
  render() {
    return (
      <>
        
        <nav class="navbar navbar-expand-lg main-navbar flex-row">
          <div className="row py-1">
            <div className="col-xl-3 d-flex align-items-center">
              <img src={Logo} className="img-logo" alt="" />

              <div class="dropdown ml-4">
                <img
                  src={SpanishImage}
                  alt="..."
                  class="rounded-circle language-icon mr-5 dropdown-toggle language-dropdown"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />

                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <img
                      src={EnglishImage}
                      alt="..."
                      class="rounded-circle language-icon mr-2"
                    />
                    English
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 ml-auto d-flex align-items-center">
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control form-control-main-search"
                  aria-label="Sizing example input"
                  placeholder="Buscar"
                />
                <div class="input-group-append search-group-append">
                  <span
                    class="input-group-text search-text-group"
                    id="inputGroup-sizing-sm"
                  >
                    <AiOutlineSearch
                      className="icon-main-search"
                      size={styles.iconSize}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 ml-auto d-flex align-items-center">
              <div className="ml-auto d-flex justify-content-center">
                <div className="item">
                  <FiUser size={styles.iconSize} className="icon-item mr-2" />
                  Perfil
                </div>
                <div className="mr-auto divider"> </div>

                <div className="item">
                  <AiOutlineQuestionCircle
                    size={styles.iconSize}
                    className="icon-item mr-2"
                  />
                  Ayuda
                </div>
                <div className="mr-auto divider"></div>
                <div className="item position-relative">
                  <AiOutlineShoppingCart
                    size={styles.iconSize}
                    className="icon-item mr-2"
                  />
                  Carro
                  <span class="badge badge-shopping-cart"> 2 </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row sub-nav-bar d-flex justify-content-center">
            {[
              {
                nombre: "Categoria",
                url: "https://www.google.com"
              },
              {
                nombre: "Novedades",
                url: "https://www.google.com"
              },
              {
                nombre: "Nuevos productos",
                url: "https://www.google.com"
              },
              {
                nombre: "Comida",
                url: "https://www.google.com"
              },
              {
                nombre: "Ropa",
                url: "https://www.google.com"
              },
              {
                nombre: "Envios",
                url: "https://www.google.com"
              },
              {
                nombre: "Servicios",
                url: "https://www.google.com"
              },
              {
                nombre: "Lo más vendido",
                url: "https://www.google.com"
              }
            ].map((value, index) => (
              <>
                <div
                  key={value}
                  className="col-xl-1 d-flex justify-content-center align-items-center"
                >
                  <a href={value.url} className="sub-nav-bar-link">
                    {value.nombre}
                  </a>
                </div>
                <div className="divider divider-sub-navbar"> </div>
              </>
            ))}
          </div>
        </nav>
        
      </>
    );
  }
}
