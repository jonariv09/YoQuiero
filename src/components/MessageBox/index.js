import React, {Component} from 'react'

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
  render() {
    return (
      <>
        <div className="card message-box-open">
          <div className="card-header header-message-box">
            <a href="/404">
              <img src={userImage} alt="" className="image-box" />
            </a>

            <div className="container-icons-message-box">
              <a href="/404" className="icon-message-box">
                <FiPhone />
              </a>
              <a href="/404" className="icon-message-box">
                <FiMinus />
              </a>
              <a href="/404" className="icon-message-box">
                <FiX />
              </a>
            </div>
          </div>

          <div className="card-body"></div>

          <div className="card-footer footer-message-box p-2">
            <div className="container-icons-footer">
              <a href="" className="">
                <FiImage size={icons.size} className="icon-footer" />
              </a>
              <a href="" className="">
                <FiSettings size={icons.size} className="icon-footer" />
              </a>
            </div>
            <input type="text" className="text-input-footer" />
            <div>
              <a href="" className="">
                <FiSend size={icons.size} className="icon-footer" />
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
