import React, {Component} from 'react'
import './index.scss'
import {FaShoppingBasket} from 'react-icons/fa'
import {FaMoneyBillWaveAlt} from 'react-icons/fa'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'
import {FaRegMoneyBillAlt} from 'react-icons/fa'

const styles = {
  iconSize: 20,
}

export default class Navbar3 extends Component {
  render() {
    return (
      <>
        <nav className="sub-nav-bar d-flex justify-content-center contenido">
          <div className="d-flex justify-content-center align-items-center navbar3-item">
            <a href="/404" className="nav-bar-link">
              <FaShoppingBasket size={styles.iconSize} />
              ==Crea Tu negocio
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center navbar3-item">
            <a href="/404" className="nav-bar-link">
              Lo más vendido
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center navbar3-item">
            <a href="/404" className="nav-bar-link">
              Tiendas
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center navbar3-item">
            <a href="/404" className="nav-bar-link">
              Novedades
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center ilumi">
            <a href="/404" className="nav-bar-link">
              Ofertas
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center ilumi">
            <a href="/404" className="nav-bar-link">
              Comida
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center ilumi">
            <a href="/404" className="nav-bar-link">
              Ropa
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center ilumi">
            <a href="/404" className="nav-bar-link">
              Envios
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center ilumi">
            <a href="/404" className="nav-bar-link">
              Servicios
            </a>
            <div className="divider divider-sub-navbar"> </div>
          </div>

          <div className="d-flex justify-content-center align-items-center dropdown">
            <a
              href="/404"
              className="nav-bar-link dropdown-toggle"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="True"
              aria-expanded="false"
            >
              Categorías
            </a>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown ">
              <a className="dropdown-item" href="#">
                Accesorios
              </a>
              <a className="dropdown-item" href="#">
                Telefonos celulares y Accesorios
              </a>
              <a className="dropdown-item" href="#">
                Comida rapida
              </a>
              <a className="dropdown-item" href="#">
                Ropa
              </a>
              <a className="dropdown-item" href="#">
                Verduras
              </a>
              <a className="dropdown-item" href="#">
                Electronica
              </a>
              <a className="dropdown-item" href="#">
                Articulos de limieza
              </a>
              <a className="dropdown-item" href="#">
                Tiendas
              </a>
              <a className="dropdown-item" href="#">
                Salud y cuidado personal
              </a>
              <a className="dropdown-item" href="#">
                Deportes
              </a>
              <a className="dropdown-item" href="#">
                Juguetes
              </a>
              <a className="dropdown-item" href="#">
                regalos
              </a>
              <a className="dropdown-item" href="#">
                Joyeria, relojes y más
              </a>
              <div className="dropdown-divider"></div>
              <a className="item" href="#">
                Ver Todos
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center navbar3-item navbar-link">
            <a
              href="/404"
              className="nav-bar-link dropdown-toggle"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="True"
              aria-expanded="false"
            >
              <FaMoneyBillWaveAlt size={styles.iconSize} />
            </a>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown ">
              <a className="dropdown-item icon-currency" href="#">
                <FaRegMoneyBillAlt />
                -Cordoba
              </a>
              <a className="dropdown-item icon-currency" href="#">
                <AiOutlineDollarCircle />
                -Dolar
              </a>
              <a className="dropdown-item icon-currency" href="#">
                <RiMoneyEuroCircleLine />
                -Euro
              </a>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
