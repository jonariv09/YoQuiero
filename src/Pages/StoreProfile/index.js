import React, {Component} from 'react'

import {
  FiSearch,
  FiMoreHorizontal,
  FiPenTool,
  FiStar,
  FiImage,
  FiClock,
  FiCamera,
} from 'react-icons/fi'

import AboveNavBar from '../../components/AboveNavBar'
import NavBar from '../../components/NavBar'
import ProductPost from '../../components/ProductPost'
import StoreProducts from '../../components/StoreProducts'

import './index.scss'
import './overwrite.scss'

export default class StoreProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coverPicture: null,
      profilePicture: null,
    }

    this.handleUploadImage = this.handleUploadImage.bind(this)
  }

  async handleUploadImage(e) {
    e.persist()

    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'yo_quiero')
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/djcuow5ib/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    )

    const imageUrl = await res.json()
    await this.setState({...this.state, [e.target.name]: imageUrl.secure_url})

    // insercion a la base de datos del url
  }

  render() {
    return (
      <>
        <AboveNavBar />
        <NavBar />

        <div className="card-business-preview">
          <div className="card-header">
            {this.state.coverPicture ? (
              <div className="banner-bussines d-flex justify-content-center">
                <img
                  src={this.state.coverPicture}
                  className="banner-bussines-image"
                  alt="#"
                />
                <label
                  htmlFor="cover-picture"
                  className="upload-picture-icon mb-0"
                >
                  <FiCamera />
                </label>
                <input
                  type="file"
                  name="coverPicture"
                  id="cover-picture"
                  style={{display: 'none'}}
                  onChange={this.handleUploadImage}
                />
              </div>
            ) : (
              <div className="banner-bussines-default">
                <label
                  htmlFor="cover-picture-default"
                  className="upload-picture-icon mb-0"
                >
                  <FiCamera />
                </label>
                <input
                  type="file"
                  name="coverPicture"
                  id="cover-picture-default"
                  style={{display: 'none'}}
                  onChange={this.handleUploadImage}
                />
              </div>
            )}

            <div className="px-3 d-flex align-items-end business-name-container">
              <div className="thumbnail">
                {this.state.profilePicture && (
                  <img
                    className="img-thumbnail"
                    src={this.state.profilePicture}
                    alt=""
                  />
                )}
                <label
                  htmlFor="profile-picture"
                  className="upload-picture-icon mb-0"
                >
                  <FiCamera />
                </label>
                <input
                  type="file"
                  name="profilePicture"
                  id="profile-picture"
                  style={{display: 'none'}}
                  onChange={this.handleUploadImage}
                />
              </div>
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
        </div>

        <div className="row main-section pt-3 px-3">
          <div className="col-xl-3">
            <div className="description-section px-4 py-1 mb-2">
              <p className="m-0"> Detalles </p>
              <div className="skeleton-description-line"></div>
              <div className="skeleton-description-line"></div>
              <div className="skeleton-description-line"></div>
              <button className="btn d-block ml-auto nav-link p-0">
                Editar detalles
              </button>
            </div>

            <StoreProducts />
          </div>

          <div className="col-xl-6">
            <div className="announcement-section px-3 py-2 mb-5">
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

            {[1, 2, 3, 4, 5].map((value, index) => (
              <ProductPost key={value} />
            ))}
          </div>

          <div className="col-xl-2"></div>
        </div>
      </>
    )
  }
}
