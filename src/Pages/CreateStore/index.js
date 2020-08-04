import React, {Component} from 'react'
import CreateStoreForm from '../../components/CreateStoreForm'
import Navbar1 from '../../components/Navbar1'
import Navbar2 from '../../components/Navbar2'
import Navbar3 from '../../components/Navbar3'
import BusinessPreview from '../../components/BusinessPreview'

import './index.scss'
import './overwrite.scss'
import '../../scss/responsive/_create-store.scss'

export default class CreateStore extends Component {
  render() {
    return (
      <>
        <div className="wrapper-store-page">
          <div className="content-wrapper-store-page">
            <div className="content-page">
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <div className="container">
                <div className="row row-store-page">
                  <div className="col1-store-page col-12 col-lg-4">
                    <CreateStoreForm />
                  </div>
                  <div className="col1-store-page col-12 col-lg-8">
                    <BusinessPreview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
