import React, {Component} from 'react'

import './index.scss'

import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {quantity: 1}

    this.handleMinusQuantity = this.handleMinusQuantity.bind(this)
    this.handleMoreQuantity = this.handleMoreQuantity.bind(this)
  }

  handleMinusQuantity() {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      })
      this.props.onMinusQuantity()
    }
  }

  handleMoreQuantity() {
    this.setState({
      quantity: this.state.quantity + 1,
    })
    this.props.onMoreQuantity()
  }

  render() {
    return (
      <>
        <button
          className="quantity-less-button btn"
          onClick={this.handleMinusQuantity}
        >
          <FiMinusSquare />
        </button>

        <span className="quantity-number">{this.state.quantity}</span>

        <button
          className="quantity-more-button btn"
          onClick={this.handleMoreQuantity}
        >
          <FiPlusSquare />
        </button>
      </>
    )
  }
}
