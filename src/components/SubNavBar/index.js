import React, {Component} from 'react'
import {FcShop} from 'react-icons/fc'
import './index.scss'
import './overwrite.scss'

import {FaFacebookF, FaTwitter, FaGoogle} from 'react-icons/fa'

export default class SubNavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar sub-navbar">
          <div className="row">
            <div className="col-xl-2">
              <a
                className="create-store-button btn-ghost"
                data-toggle="modal"
                data-target="#exampleModal"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <FcShop className="mr-1" />
                  Crea tu tienda
                </div>
              </a>
            </div>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header d-flex flex-column align-items-center pb-0">
                    <span className="py-2 lead font-weight-bold text-dark">
                      {' '}
                      Registrar con{' '}
                    </span>
                    <span className="py-2 text-muted ">
                      {' '}
                      Registrate con tu cuenta de redes{' '}
                    </span>

                    <div className="d-flex justify-content-center">
                      <a
                        href="/404"
                        className="icon-social-network-modal icon-facebook d-flex justify-content-center align-items-center mx-2"
                      >
                        <FaFacebookF className="text-center" />
                      </a>
                      <a
                        href="/404"
                        className="icon-social-network-modal icon-twitter d-flex justify-content-center align-items-center mx-2"
                      >
                        <FaTwitter className="text-center" />
                      </a>
                      <a
                        href="/404"
                        className="icon-social-network-modal icon-google d-flex justify-content-center align-items-center mx-2"
                      >
                        <FaGoogle className="text-center" />
                      </a>
                    </div>

                    <div className="d-flex justify-content-center align-items-center w-100 mt-3">
                      <div className="divider-modal"></div>
                      <div className="circle"></div>
                      <div className="divider-modal"></div>
                    </div>
                  </div>
                  <div class="modal-body py-2">
                    <form method="post">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Nombre de usuario"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Correo"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Contraseña"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Escriba de nuevo su contraseña"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer d-flex justify-content-center pt-0">
                    <a href="/createStore" class="btn btn-primary">
                      Registrarse
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 d-flex align-items-center">
              <a className="link text-light" href="/404">
                Especiales de hoy
              </a>
            </div>

            <div className="col-xl-2 d-flex align-items-center">
              <a className="link text-light" href="/404">
                Servicio al cliente
              </a>
            </div>

            <div className="col-xl-5 d-flex justify-content-center align-items-center">
              <span className="link text-light mr-1">
                ¿Todavía no tienes una cuenta?
              </span>
              <a href="/404"> Registrate gratis </a>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
