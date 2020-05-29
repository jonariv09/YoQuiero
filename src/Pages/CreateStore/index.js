import React, { Component } from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import CreateStoreForm from "../../components/CreateStoreForm";
import AboveNavBar from "../../components/AboveNavBar";
import BusinessPreview from "../../components/ BusinessPreview";

export default class CreateStore extends Component {
  render() {
    return (
      <>
        <div className="wrapper-store-page">
          <div className="content-wrapper-store-page">
            <div className="content-page">
              <AboveNavBar />
              <NavBar />
              <div className="container">
                <div className="row">
                  <div className="col-xl-4">
                    <CreateStoreForm />
                  </div>
                  <div className="col-xl-8">
                    <BusinessPreview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
