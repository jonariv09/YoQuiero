import React, {Component} from 'react'
import NotFoundBanner from '../../assets/images/404.png'
import './index.scss'

export default class NotFound extends Component {
  render() {
    return (
      <>
        <img className="image-not-found" src={NotFoundBanner} alt="" />
      </>
    )
  }
}
