import React, {Component} from 'react'
import './index.css'
import Certificado from '../../assets/images/certific.gif'
import Logo from '../../assets/images/logo.png'
export default class Annoucement extends Component {
  render() {
    return (
      <>
        <div className="categories">
          <div className="card ancho">
            <img src={Certificado} class="card-img-top ta" alt="..." />
            <div className="card-body">
              <h5 className="card-title esp">
                Bienvenido a{' '}
                <span>
                  <img src={Logo} className="logo" />
                </span>
              </h5>
              <button className="btn btn-naranja">Crear Tienda</button>
              <button className="btn btn-verde">Acceder</button>
            </div>
            <ul class="list-group list-group-flush espacio">
              <li className="list-group-item">Esto te gustará</li>
            </ul>
            <div className="card-body">
              <a href="#" class="card-link">
                Ver más
              </a>
              <a href="#" class="card-link">
                Agrega esto a tu vida
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
