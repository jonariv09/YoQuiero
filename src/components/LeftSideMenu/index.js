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
                <span className="text-nav-item"> Tableros de ventas </span>
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
                <span className="text-nav-item"> Calendario </span>
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
                <span className="text-nav-item"> Mensajes </span>
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
                <span className="text-nav-item"> Comercio electrónico </span>
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
                <span className="text-nav-item"> Correo electrónico </span>
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
                <span className="text-nav-item"> Tareas </span>
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
                <span className="text-nav-item"> Diseños </span>
              </a>
            </li>

            {/* Testeo del scroll para los diferentes diseños responsive */}
            {/*{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 123, 123].map((value, index) => (*/}
            {/*  <li className="nav-item">*/}
            {/*    <a*/}
            {/*      className="nav-link"*/}
            {/*      href="/404"*/}
            {/*      tabIndex="-1"*/}
            {/*      aria-disabled="true"*/}
            {/*    >*/}
            {/*      <FiImage className="nav-icon" />*/}
            {/*      <span className="text-nav-item"> Diseños </span>*/}
            {/*    </a>*/}
            {/*  </li>*/}
            {/*))}*/}
          </div>
        </nav>
      </>
    )
  }
}
