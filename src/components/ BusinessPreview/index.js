import React, { Component } from "react";
import BannerPreview from "../../assets/banner-preview.jpg";
import {
  FiMoreHorizontal,
  FiPenTool,
  FiImage,
  FiClock,
  FiStar
} from "react-icons/fi";
import "./index.css";
import "./overview.css";

export default class BusinessPreview extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-header">
            <p> Vista previa de tu negocio </p>
            <img src={BannerPreview} alt="" width="100%" />
            <div>
              <span class="img-thumbnail"> </span>
              <p> Nombre de tu negocio </p>
              <p> Categoría </p>
            </div>
            <nav class="navbar navbar-expand-lg">
              <ul className="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Mis productos
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Ventas
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Crear publicidad
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Ver más
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>

                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    <FiMoreHorizontal />
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    <FiPenTool />
                    Editar perfil
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="description-section">
                <div className="skeleton-description-line"></div>
                <div className="skeleton-description-line"></div>
                <div className="skeleton-description-line"></div>
              </div>

              <div className="announcement-section">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="announcement"
                    name="announcement"
                  />
                </div>

                <div className="icons-container">
                  <div className="item-icons-container">
                    <FiImage /> Nueva foto
                  </div>
                  <div className="item-icons-container">
                    <FiClock /> Próximamente
                  </div>
                  <div className="item-icons-container">
                    <FiStar /> Producto estrella
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
