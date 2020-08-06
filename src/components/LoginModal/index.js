import React, {Component} from 'react'
import {FaFacebookF, FaTwitter, FaGoogle} from 'react-icons/fa'
import './index.scss'

export default class LoginModal extends Component {
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header d-flex flex-column align-items-center pb-0">
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
              <div className="modal-body py-2">
                <form method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Nombre de usuario"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Correo"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Escriba de nuevo su contraseña"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-center pt-0">
                <a href="/createStore" className="btn btn-primary">
                  Registrarse
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
