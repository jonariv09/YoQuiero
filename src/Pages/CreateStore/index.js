import React, { Component } from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import CreateStoreForm from "../../components/CreateStoreForm";

export default class CreateStore extends Component {
  render() {
    return (
      <>
        <div className="wrapper-store-page">
          <div className="content-wrapper-store-page">
            <div className="content-page">

              
              <NavBar />
              <div className="container">
                <div className="row">
                  <div className="col-xl-4">
                    <CreateStoreForm />
                  </div>
                  <div className="col-xl-8"></div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </>
    );
  }
}
