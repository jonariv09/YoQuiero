import React, {Component} from 'react'
import {RiTruckLine} from 'react-icons/ri'
import './index.scss'
const styles = {
  iconSize: 35,
}
export default class Navbar4 extends Component {
  render() {
    return (
      <>
        <nav className=" color letras-color d-none d-sm-none d-md-block">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a href="#" className="linki">
                <RiTruckLine size={styles.iconSize} />
                Envios a tu departamento
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link linki">
                Especiales de hoy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link linki" href="#">
                Servicio al cliente
              </a>
            </li>
            <li className="nav-item ">
              <a href="" className="nav-link linki">
                ¿Aun no tienes una cuenta?{' '}
                <a href="" className="linki2">
                  crear cuenta aqui
                </a>
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}
