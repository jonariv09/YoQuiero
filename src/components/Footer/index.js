import React, {Component} from 'react'
import './index.scss'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import Logo from '../../assets/images/logo.png'
import {FaPaperPlane} from 'react-icons/fa'

const styles = {
  iconSize: 30,
}

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="page-footer font-small blue pt-4 color color-letra">
          <div className="container-fluid text-md-left">
            <div className="row">
              <div className="col-md-4 mb-md-0 mb-4">
                <h5 class="text-uppercase">
                  ¿Quieres saber mas sobre nosotros?
                </h5>
                <ul class="list-unstyled text-left espacio">
                  <li>
                    <a href="#" className="link">
                      Vende en YoQuiero
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Relaciones con nuestros clientes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Nuestro Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      ¿Que beneficios ofrecemos?
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none pb-3"></hr>
              <div className="col-md-4 mb-md-0 mb-4 ">
                <h5 class="text-uppercase">Aumenta tus ventas en YoQuiero</h5>
                <ul class="list-unstyled espacio">
                  <li>
                    <a href="#!" className="link">
                      Publica lo que vendes
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Crea tu propia publicidad
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Conectate con tus clientes potenciales
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Tu negocio en todos lados
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-4 mb-md-0 mb-3 ">
                <h5 class="text-uppercase">Soporte técnico</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#!" className="link">
                      ¿Necesitas ayuda con tu cuenta?
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Informacion sobre tu cuenta
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      Envio de prod2uctos
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link">
                      ayuda
                    </a>
                  </li>
                  <li>
                    <br></br>
                    <span className="texto-color">
                      Siguenos en nuestras redes sociales:
                    </span>
                    <a href="#">
                      <AiFillFacebook
                        className="link-icon"
                        size={styles.iconSize}
                      />
                    </a>
                    <a href="#">
                      <AiFillTwitterSquare
                        className="link-icon"
                        size={styles.iconSize}
                      />
                    </a>
                    <a href="#">
                      <AiFillInstagram
                        className="link-icon"
                        size={styles.iconSize}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3 final-color footerbajo d-none d-md-block">
            <div className="row ancho">
              <div className="col-2">
                <img src={Logo} className="dimen" />
              </div>
              <div className="col-2">
                <a href="" className="link">
                  Informacion de YoQuiero
                </a>
              </div>
              <div className="col-2">
                <a href="" className="link">
                  Privacidad
                </a>
              </div>
              <div className="col-2">
                <a href="" className="link">
                  Condiciones de uso
                </a>
              </div>
              <div className="col-4">
                <a>
                  Envianos un correo{' '}
                  <span>
                    <button type="button" className="btn btn-primary  btn-sm">
                      <FaPaperPlane className="tam-icon" />
                      Enviar
                    </button>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
