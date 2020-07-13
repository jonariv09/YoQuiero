import React, {Component} from 'react'

import {
  FiMoreHorizontal,
  FiPenTool,
  FiImage,
  FiClock,
  FiStar,
  FiSearch,
} from 'react-icons/fi'

import BannerPreview from '../../assets/images/banner-preview.jpg'
import StorePicture from '../../assets/images/StorePicture.png'

import './index.scss'
import './overwrite.scss'

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
              <img src={StorePicture} className="img-thumbnail" alt="" />
              <div className="ml-3 mb-4">
                <p className="m-0 font-weight-bold"> Nombre de tu negocio </p>
                <p className="m-0 font-weight-light"> Categoría </p>
              </div>
            </div>

            <nav className="navbar-business-preview navbar navbar-expand-lg p-0">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/404">
                    Mis productos
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/404">
                    Ventas
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/404">
                    Crear publicidad
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/404"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Ver más
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/404">
                      Action
                    </a>
                    <a className="dropdown-item" href="/404">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/404">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav ml-3">
                <li className="nav-item icon-item-shadow active">
                  <a className="nav-link icon-link-shadow" href="/404">
                    <FiSearch />
                  </a>
                </li>

                <li className="nav-item icon-item-shadow active">
                  <a className="nav-link icon-link-shadow" href="/404">
                    <FiMoreHorizontal />
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link icon-link" href="/404">
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
                <div className="form-group m-1">
                  <input
                    type="text"
                    className="form-control announcement-input"
                    id="announcement"
                    name="announcement"
                    placeholder="Anuncio"
                  />
                </div>
                <div className="horizontal-divider"></div>

                <div className="icons-container pt-2">
                  <div className="item-icons-container mx-2 d-flex align-items-center">
                    <FiImage className="icon-announcement mr-1" /> Nueva foto
                  </div>
                  <div className="item-icons-container mx-2 d-flex align-items-center">
                    <FiClock className="icon-announcement mr-1" /> Próximamente
                  </div>
                  <div className="item-icons-container mx-2 d-flex align-items-center">
                    <FiStar className="icon-announcement mr-1" /> Producto
                    estrella
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
