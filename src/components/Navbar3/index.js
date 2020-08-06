import React, {Component} from 'react'
import './index.scss'
import {FaShoppingBasket} from 'react-icons/fa'
import LoginModal from '../LoginModal'

const styles = {
  iconSize: 20,
}

export default class Navbar3 extends Component {
  render() {
    return (
      <>
        <nav className="wrapper m-0">
          <div className="item">
            <a href="" data-toggle="modal" data-target="#loginmodal">
              <FaShoppingBasket size={styles.iconSize} />
              Crear
            </a>
          </div>
          <div className="divider-line"></div>

          <div className="item">
            <a href="#">más vendido</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Tiendas</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Novedades</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Ofertas</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Comida</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Ropa</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Envios</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Servicios</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">categorias</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Promociones</a>
          </div>
          <div className="divider-line"></div>
          <div className="item">
            <a href="#">Más</a>
          </div>
        </nav>
      </>
    )
  }
}
