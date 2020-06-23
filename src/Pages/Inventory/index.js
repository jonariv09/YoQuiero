import React, {Component} from 'react'
import './index.scss'
import LeftSideMenu from '../../components/LeftSideMenu'

export default class Inventory extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div id="wrapper">
          <LeftSideMenu />
          <div id="content-wrapper">
            <div id="content"></div>
          </div>
        </div>
      </>
    )
  }
}
