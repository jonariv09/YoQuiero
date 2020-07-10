import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group'

import {
  FiPhone,
  FiX,
  FiMinus,
  FiImage,
  FiSettings,
  FiSend,
} from 'react-icons/fi'

import './index.scss'
import './overwrite.scss'

import userImage from '../../assets/images/userImage.jpg'

const icons = {
  size: 20,
}

export default class MessageBox extends Component {
  constructor(props) {
    super(props)
    this.handleToogle = this.handleToogle.bind(this)
  }

  handleToogle() {
    this.props.onToggleMessageBox()
  }

  render() {
    return (
      <>
        {this.props.toggleMessageBox ? (
          <div className="card message-box-open">
            <div
              className="card-header header-message-box"
              onClick={this.handleToogle}
            >
              <a href="/404">
                <img src={userImage} alt="" className="image-box" />
              </a>

              <div className="container-icons-header">
                <a href="/404">
                  <FiPhone size={icons.size} className="icon-header" />
                </a>
                <a href="">
                  <FiMinus
                    size={icons.size}
                    className="icon-header"
                    onClick={this.handleToogle}
                  />
                </a>
                <a href="/404">
                  <FiX size={icons.size} className="icon-header" />
                </a>
              </div>
            </div>

            <div className="card-body"></div>

            <div className="card-footer footer-message-box">
              <div className="container-icons-footer">
                <a href="/404" className="">
                  <FiImage size={icons.size} className="icon-footer" />
                </a>
                <a href="/404" className="">
                  <FiSettings size={icons.size} className="icon-footer" />
                </a>
              </div>
              <input type="text" className="text-input-footer" />
              <div>
                <a href="/404" className="">
                  <FiSend size={icons.size} className="icon-footer" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <> </>
        )}
      </>
    )
  }
}
