import React, {Component} from 'react'
import './index.scss'
import {RiHomeSmileLine, RiAccountCircleLine} from 'react-icons/ri'
import {MdMenu} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
const styles = {
  iconSize: 30,
}
export default class LowerNavigationBar extends Component {
  render() {
    return (
      <>
        <nav className="wrapper-lower-navigation d-flex justify-content-center align-items-center sticky-top-2 d-block d-md-none">
          <div className="icons-lower-navigation">
            <a href="#">
              <RiHomeSmileLine size={styles.iconSize} />
            </a>
          </div>
          <div className="icons-lower-navigation">
            <a href="#">
              <MdMenu size={styles.iconSize} />
            </a>
          </div>
          <div className="icons-lower-navigation">
            <a href="#">
              <RiAccountCircleLine size={styles.iconSize} />
            </a>
          </div>
          <div className="icons-lower-navigation">
            <a href="#">
              <FiShoppingCart size={styles.iconSize} />
            </a>
          </div>
        </nav>
      </>
    )
  }
}
