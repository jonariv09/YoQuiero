import React, {Component} from 'react'

import {
  FiHome,
  FiMessageSquare,
  FiShoppingBag,
  FiCalendar,
  FiMail,
  FiFileText,
  FiImage,
} from 'react-icons/fi'

import './index.scss'
import './overwrite.scss'

import logo from '../../assets/images/logo.png'

export default class LeftSideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-nav left-side-menu position-fixed">
          <div className="navbar-header">
            <img alt="#" src={logo} className="logo-image" />
          </div>
          <div className="navbar-list-container">
            <span className="navbar-text px-4"> Navegación </span>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/404"
                tabIndex="-1"
                aria-disabled="true"
              >
                <FiHome className="nav-icon" />
                Tableros de ventas
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/404"
                tabIndex="-1"
                aria-disabled="true"
              >
                <FiCalendar className="nav-icon" />
                Calendario
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/404"
                tabIndex="-1"
                aria-disabled="true"
              >
                <FiMessageSquare className="nav-icon" />
                Mensajes
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/404"
                tabIndex="-1"
                aria-disabled="true"
              >
                <FiShoppingBag className="nav-icon" />
                Comercio electrónico
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/404"
                tabIndex="-1"
                aria-disabled="true"
              >
                <FiMail className="nav-icon" />
                Correo electrónico
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/404"
                tabIndex="-1"
                aria-disabled="true"
              >
                <FiFileText className="nav-icon" />
                Tareas
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/404"
                tabIndex="-1"
                aria-disabled="true"
              >
                <FiImage className="nav-icon" />
                Diseños
              </a>
            </li>
          </div>
        </nav>
      </>
    )
  }
}
