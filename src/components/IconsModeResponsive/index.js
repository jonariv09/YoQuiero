import React, {Component} from 'react'
import './index.scss'
import {TiThMenu} from 'react-icons/ti'
import {GiHamburger} from 'react-icons/gi'
import {FaTshirt} from 'react-icons/fa'
import {AiOutlineLaptop} from 'react-icons/ai'
import {AiFillCar} from 'react-icons/ai'
import {FaStore} from 'react-icons/fa'
import {GiRunningShoe} from 'react-icons/gi'
import {IoMdFootball} from 'react-icons/io'
import {GiPresent} from 'react-icons/gi'
import {GiTomato} from 'react-icons/gi'
const style = {
  iconSize: 40,
}
export default class IconsModeResponsive extends Component {
  render() {
    return (
      <>
        <div className="container d-flex justify-content-center m-0 d-block d-md-none row">
          <div className="ite" id="item1">
            <a href="#">
              <TiThMenu size={style.iconSize} className="colo" />
            </a>
          </div>

          <div className="ite" id="item2">
            <a href="#">
              <GiHamburger size={style.iconSize} />
            </a>
          </div>

          <div className="ite" id="item3">
            <a href="#">
              <FaTshirt size={style.iconSize} />
            </a>
          </div>

          <div className="ite" id="item4">
            <a href="#">
              <AiOutlineLaptop size={style.iconSize} />
            </a>
          </div>

          <div className="ite" id="item5">
            <a href="#">
              <AiFillCar size={style.iconSize} />
            </a>
          </div>
          <div className="ite" id="item6">
            <a href="#">
              <FaStore size={style.iconSize} />
            </a>
          </div>
          <div className="ite" id="item7">
            <a href="#">
              <GiRunningShoe size={style.iconSize} />
            </a>
          </div>
          <div className="ite" id="item8">
            <a href="#">
              <GiPresent size={style.iconSize} />
            </a>
          </div>
          <div className="ite" id="item9">
            <a href="#">
              <IoMdFootball size={style.iconSize} />
            </a>
          </div>
          <div className="ite" id="item10">
            <a href="#">
              <GiTomato size={style.iconSize} />
            </a>
          </div>
        </div>
      </>
    )
  }
}
