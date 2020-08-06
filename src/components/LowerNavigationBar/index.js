import React, {Component} from 'react'
import './index.scss'
import {RiHomeSmileLine, RiAccountCircleLine} from 'react-icons/ri'
import {MdMenu} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import LoginModal from '../LoginModal'

const styles = {
  iconSize: 30,
}
export default class LowerNavigationBar extends Component {
  render() {
    return (
      <>
        <nav className="wrapper-lower-navigation d-flex justify-content-center align-items-center sticky-top-2 d-block d-md-none">
          <div className="icons-lower-navigation">
            <a href="/Home">
              <RiHomeSmileLine size={styles.iconSize} />
            </a>
          </div>
          <div className="icons-lower-navigation">
            <a href="#">
              <MdMenu size={styles.iconSize} />
            </a>
          </div>
          <div className="icons-lower-navigation">
            <a href="#" data-toggle="modal" data-target="#loginmodal">
              <RiAccountCircleLine size={styles.iconSize} />
            </a>
          </div>
          <div className="icons-lower-navigation">
            <a href="/shopping-car">
              <FiShoppingCart size={styles.iconSize} />
            </a>
          </div>
        </nav>

        <LoginModal to="/createStore" />
      </>
    )
  }
}
