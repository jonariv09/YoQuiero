import React, {Component} from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div>
          <a href="/404">
            <img src={this.props.image} className="rounded" alt="" />
          </a>
          <span className="d-block pt-1"> C$ 00.00 </span>
        </div>
      </>
    )
  }
}
