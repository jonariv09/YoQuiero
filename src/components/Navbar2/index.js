import React, {Component} from 'react'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import {FiShoppingCart, FiSearch, FiUser} from 'react-icons/fi'
import {MdLanguage} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'

const styles = {
  iconSize: 21,
}
const icons = {
  size: 25,
}

export default class Navbar2 extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/*****************************************************************************/}
          {/*****************************************************************************/}
          {/*Logo*/}
          <div className="col-3">
            <a className="logo navbar-brand mr-auto " href="#">
              <img src={Logo} className="image-logo" alt="" />
            </a>
          </div>
          {/*Fin Logo*/}
          {/*****************************************************************************/}
          {/*****************************************************************************/}
          {/*Iconos en tamaño responsive*/}
          <div className="responsive-navbar navbar-toggler">
            <FiSearch size={icons.size} className="responsive-navbar-item" />
            <FiShoppingCart
              size={icons.size}
              className="responsive-navbar-item"
            />
            <FiUser size={icons.size} className="responsive-navbar-item" />
          </div>
          {/*Fin Iconos en tamaño responsive*/}
          {/*****************************************************************************/}
          {/*****************************************************************************/}
          {/*Boton desplegable en tamaño responsive*/}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/*Fin Boton desplegable en tamaño responsive*/}
          {/*****************************************************************************/}
          {/*****************************************************************************/}
          {/* inicio Buscador*/}
          <div className="col-xl-4 ml-auto d-flex align-items-center">
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control form-control-main-search"
                aria-label="Sizing example input"
                placeholder="Buscar"
              />
              <div className="input-group-append search-group-append">
                <a
                  href="#"
                  className="input-group-text search-text-group"
                  id="inputGroup-sizing-sm"
                >
                  <AiOutlineSearch
                    className="icon-main-search"
                    size={styles.iconSize}
                  />
                </a>
              </div>
            </div>
          </div>
          {/*Fin inicio Buscador*/}
          {/*****************************************************************************/}
          {/*****************************************************************************/}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*****************************************************************************/}
            {/*****************************************************************************/}
            {/*Idioma*/}

            <div className="dropdown col-1 ">
              <MdLanguage
                className="language-icon mr-5 dropdown-toggle language-dropdown "
                href="#"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item d-flex align-items-center" href="#">
                  Español
                </a>
              </div>
            </div>
            <div className="col-4 d-none d-md-block">
              <button className="btn btn-sm btn-success" title="Iniciar sesión">
                Iniciar sesión
              </button>
            </div>

            {/*Fin Idioma*/}
            {/*****************************************************************************/}
            {/*****************************************************************************/}
            {/*Inicio Opciones*/}

            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Soluciones <span class="sr-only"> (current) </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Porque Elegirnos
                </a>
              </li>

              <li class="nav-item d-none d-md-block ">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                  <FiShoppingCart
                    size={icons.size}
                    className="responsive-navbar-item"
                  />
                  Carro
                </a>
              </li>
            </ul>

            {/*Fin Opciones*/}
            {/*****************************************************************************/}
            {/*****************************************************************************/}
          </div>
        </nav>
      </>
    )
  }
}
