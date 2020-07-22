import React, {Component} from 'react'
import CreateStoreForm from '../../components/CreateStoreForm'
import Navbar1 from '../../components/Navbar1'
import Navbar from '../../components/Navbar'
import Navbar3 from '../../components/Navbar3'
import BusinessPreview from '../../components/BusinessPreview'

import './index.scss'
import './overwrite.scss'
import '../../scss/modules/_create-store-responsive.scss'

export default class CreateStore extends Component {
  render() {
    return (
      <>
        <div className="wrapper-store-page">
          <div className="content-wrapper-store-page">
            <div className="content-page">
              {/*<Navbar1 />*/}
              {/*<Navbar />*/}
              {/*<Navbar3 />*/}
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <CreateStoreForm />
                  </div>
                  <div className="col-12  col-lg-8">
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
