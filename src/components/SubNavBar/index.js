import React, { Component } from "react";
import { FcShop } from "react-icons/fc";
import "./index.css";

export default class SubNavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar sub-navbar">
          <div className="row">
            <div className="col-xl-2">
              <a
                className="create-store-button btn-ghost"
                data-toggle="modal"
                data-target="#exampleModal"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <FcShop className="mr-1" />
                  Crea tu tienda
                </div>
              </a>
            </div>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 d-flex align-items-center">
              <a className="link text-light" href="/404">
                {" "}
                Especiales de hoy{" "}
              </a>
            </div>

            <div className="col-xl-2 d-flex align-items-center">
              <a className="link text-light" href="/404">
                {" "}
                Servicio al cliente{" "}
              </a>
            </div>

            <div className="col-xl-5 d-flex justify-content-center align-items-center">
              <span className="link text-light mr-1">
                {" "}
                ¿Todavía no tienes una cuenta?{" "}
              </span>{" "}
              <a href="/404"> Registrate gratis </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
