import React, {Component} from 'react'
import './index.scss'
import {GiCutDiamond} from 'react-icons/gi'
import {GoCreditCard} from 'react-icons/go'
import {FaHeadphonesAlt} from 'react-icons/fa'
import {FaTruckLoading} from 'react-icons/fa'
import {MdSecurity} from 'react-icons/md'
import {FcAndroidOs} from 'react-icons/fc'

const icons = {
  fontSize: 100,
}

export default class Information extends Component {
  render() {
    return (
      <>
        <div className="col-11 container tam-text d-none d-md-block">
          <div className="row color-fila">
            <div className="col-2 text-center">
              <span className="information-icon">
                <GiCutDiamond size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                Calidad y bajos precios
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>

            <div className="col-2 text-center">
              <span className="information-icon">
                <GoCreditCard size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                Pagos seguros
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>
            <div className="col-2 text-center">
              <span className="information-icon">
                <FaHeadphonesAlt size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                Atención al cliente 24 las 24 horas
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>
            <div className="col-2 text-center">
              <span className="information-icon">
                <FaTruckLoading size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                Envios a todos los departamentos
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>
            <div className="col-2 text-center">
              <span className="information-icon">
                <MdSecurity size={icons.fontSize} />
              </span>
              <br></br>
              <a href="#" className="linki">
                compra con seguridad y confianza
              </a>
            </div>
            <div className="divider divider-sub-navbar text"> </div>
            <div className="col-1 text-center">
              <span className="information-icon">
                <FcAndroidOs size={icons.fontSize} />
              </span>
              <a href="#" className="">
                App Android
              </a>
            </div>
            <div className="divider divider-sub-navbar"> </div>
          </div>
        </div>
      </>
    )
  }
}
