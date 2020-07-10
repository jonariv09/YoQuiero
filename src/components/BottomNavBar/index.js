import React, {Component} from 'react'

import {FiSearch, FiChevronLeft, FiChevronRight, FiSend} from 'react-icons/fi'

import './index.scss'
import './overwrite.scss'

import userImage from '../../assets/images/userImage.jpg'
import MessageBox from '../MessageBox'

const icons = {
  font: 22,
}

export default class BottomNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {toggleMessageBox: false}

    this.handleToggleMessageBox = this.handleToggleMessageBox.bind(this)
  }

  handleToggleMessageBox() {
    this.setState({toggleMessageBox: !this.state.toggleMessageBox})
  }

  render() {
    return (
      <>
        <div className="row bottom-navbar">
          <div className="col-3 pt-0 search-input-section">
            <div className="search-input-navbar-bottom">
              <input
                type="text"
                className="input-form-control form-control"
                id="client"
                placeholder="Buscar cliente"
              />
              <label htmlFor="client" className="m-0">
                <FiSearch />
              </label>
            </div>
          </div>

          <div className="col-6 users-section">
            <div className="users-container">
              <FiChevronLeft className="ml-auto" />
              {[1, 2, 3, 4, 5, 7].map((index, value) => (
                <div className="user-thumbnail">
                  <img src={userImage} alt="" className="thumbnail-image" />
                </div>
              ))}
              <FiChevronRight className="mr-auto" />
            </div>
          </div>

          <div className="col-3 p-0">
            <MessageBox
              toggleMessageBox={this.state.toggleMessageBox}
              onToggleMessageBox={this.handleToggleMessageBox}
            />
            <div
              className="message-box-close"
              onClick={this.handleToggleMessageBox}
            >
              <div> Mensaje de texto </div>
              <FiSend size={icons.font} className="icon-message-box" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
