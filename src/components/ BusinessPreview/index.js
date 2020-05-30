import React, { Component } from "react";
import BannerPreview from "../../assets/banner-preview.jpg";
import {
  FiMoreHorizontal,
  FiPenTool,
  FiImage,
  FiClock,
  FiStar,
  FiSearch
} from "react-icons/fi";
import StorePicture from '../../assets/StorePicture.png'
import "./index.css";
import "./overwrite.css";

export default class BusinessPreview extends Component {
  render() {
    return (
      <>
        <div className="card card-business-preview my-3">
          <p className="font-weight-bold"> Vista previa de tu negocio </p>
          <div className="card-header">
            <img
              src={BannerPreview}
              className="banner-business-preview"
              alt=""
              width="100%"
            />
            <div className="px-3 d-flex align-items-end business-name-container">
              <img src={StorePicture} class="img-thumbnail" alt="" />
              <div className="ml-3 mb-4">
                <p className="m-0 font-weight-bold"> Nombre de tu negocio </p>
                <p className="m-0 font-weight-light"> Categoría </p>
              </div>
            </div>

            <nav class="navbar-business-preview navbar navbar-expand-lg p-0">
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
              </ul>

              <ul className="navbar-nav ml-3">
                <li class="nav-item icon-item-shadow active">
                  <a class="nav-link icon-link-shadow" href="#">
                    <FiSearch />
                  </a>
                </li>

                <li class="nav-item icon-item-shadow active">
                  <a class="nav-link icon-link-shadow" href="#">
                    <FiMoreHorizontal />
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link icon-link" href="#">
                    <FiPenTool className="mr-1" />
                    Editar perfil
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="card-body">
            <div className="">
              <div className="description-section px-4 py-1 mb-2">
                <p className="m-0"> Descripción </p>
                <div className="skeleton-description-line"></div>
                <div className="skeleton-description-line"></div>
                <div className="skeleton-description-line"></div>
                <p className="text-right m-0"> Editar detalles </p>
              </div>

              <div className="announcement-section px-3 py-2">
                <div class="form-group m-1">
                  <input
                    type="text"
                    class="form-control announcement-input"
                    id="announcement"
                    name="announcement"
                    placeholder="Anuncio"
                  />
                </div>
                <div className="horizontal-divider"></div>

                <div className="icons-container pt-2">
                  <div className="item-icons-container mx-2 d-flex align-items-center">
                    <FiImage className="icon-announcement mr-1"/> Nueva foto
                  </div>
                  <div className="item-icons-container mx-2 d-flex align-items-center">
                    <FiClock className="icon-announcement mr-1"/> Próximamente
                  </div>
                  <div className="item-icons-container mx-2 d-flex align-items-center">
                    <FiStar className="icon-announcement mr-1"/> Producto estrella
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
