import React, {Component} from 'react'

import Counter from '../Counter'

import './index.scss'

export default class CounterPrepurchase extends Component {
  constructor(props) {
    super(props)
    this.state = {priceAdded: 20000, productPrice: 20000}

    this.handleMinusQuantity = this.handleMinusQuantity.bind(this)
    this.handleMoreQuantity = this.handleMoreQuantity.bind(this)
  }

  handleMinusQuantity() {
    this.setState({
      priceAdded: this.state.priceAdded - this.state.productPrice,
    })
  }

  handleMoreQuantity() {
    this.setState({
      priceAdded: this.state.priceAdded + this.state.productPrice,
    })
  }

  render() {
    return (
      <>
        <p className="font-weight-bold">
          <span className="pr-3 text-muted"> Precio: </span>
          C$ {this.state.priceAdded}
        </p>

        <div className="quantity-container">
          <span className="text-muted"> Cantidad: </span>

          <Counter
            onMinusQuantity={this.handleMinusQuantity}
            onMoreQuantity={this.handleMoreQuantity}
          />
        </div>
      </>
    )
  }
}
