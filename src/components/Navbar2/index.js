import React, {Component} from 'react'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import {FiShoppingCart, FiSearch, FiUser} from 'react-icons/fi'
import {MdLanguage, MdAccountCircle} from 'react-icons/md'
import {AiOutlineSearch, AiOutlineDollarCircle} from 'react-icons/ai'
import {GrMoney} from 'react-icons/gr'
import {FaRegMoneyBillAlt, FaTruckLoading} from 'react-icons/fa'
import {BsFillGearFill} from 'react-icons/bs'
import {
  RiMoneyEuroCircleLine,
  RiCustomerService2Line,
  RiShieldStarLine,
} from 'react-icons/ri'
import {GiPresent} from 'react-icons/gi'
import LoginModal from '../LoginModal'

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          {/*****************************************************************************/}
          {/*****************************************************************************/}
          {/*Logo*/}
          <div className="col-2">
            <a className="logo navbar-brand mr-auto " href="/">
              <img src={Logo} className="image-logo" alt="" />
            </a>
          </div>
          {/*Fin Logo*/}
          {/*****************************************************************************/}
          {/*****************************************************************************/}
          {/*tipo de moneda*/}
          <div className="dropdown col-1 d-none d-md-block">
            <GrMoney
              href="#"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item d-flex align-items-center" href="#">
                <FaRegMoneyBillAlt style={icons.size} className="icon" />{' '}
                Cordoba
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <AiOutlineDollarCircle style={icons.size} className="icon" />{' '}
                Dolar
              </a>

              <a className="dropdown-item d-flex align-items-center" href="#">
                <RiMoneyEuroCircleLine style={icons.size} className="icon" />{' '}
                Euro
              </a>
            </div>
          </div>
          {/*Fin tipo de moneda*/}
          {/*****************************************************************************/}
          {/*****************************************************************************/}
          {/*Boton desplegable en tamaño responsive*/}
          <button
            className="navbar-toggler d-md-none"
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
                <a className="dropdown-item d-flex align-items-center" href="#">
                  Ingles
                </a>
              </div>
            </div>
            <div className="col-4 d-none d-md-block">
              <a
                href=""
                className="btn btn-sm btn-success"
                title="Iniciar sesión"
                data-toggle="modal"
                data-target="#loginmodal"
              >
                Iniciar sesión
              </a>
            </div>

            {/*Fin Idioma*/}
            {/*****************************************************************************/}
            {/*****************************************************************************/}
            {/*Inicio Opciones*/}

            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <BsFillGearFill
                    className="icon d-md-none"
                    zise={icons.zise}
                  />
                  Soluciones <span class="sr-only"> (current) </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RiShieldStarLine
                    className="icon d-md-none"
                    zise={icons.zise}
                  />
                  Porque Elegirnos
                </a>
              </li>
              <li class="nav-item d-md-none">
                <a class="nav-link" href="#">
                  <FaTruckLoading className="icon" zise={icons.zise} />
                  Envios a tu departamento
                </a>
              </li>
              <li class="nav-item d-md-none">
                <a class="nav-link" href="#">
                  <GiPresent className="icon" zise={icons.zise} />
                  Especiales de hoy
                </a>
              </li>
              <li class="nav-item d-md-none">
                <a class="nav-link" href="#">
                  <RiCustomerService2Line className="icon" zise={icons.zise} />
                  Servicio al cliente
                </a>
              </li>
              <li class="nav-item d-md-none">
                <a
                  class="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#loginmodal"
                >
                  <MdAccountCircle className="icon" zise={icons.zise} />
                  Crear una cuenta
                </a>
              </li>
              <li class="nav-item d-none d-md-block">
                <a
                  class="nav-link"
                  href="/shopping-car"
                  tabindex="-1"
                  aria-disabled="true"
                >
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

        <LoginModal to="/createStore" />
      </>
    )
  }
}
