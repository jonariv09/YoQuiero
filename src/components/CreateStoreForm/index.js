import React, { Component } from "react";
import { FiHelpCircle } from "react-icons/fi";
import "./index.css";
import "./overwrite.css";

export default class CreateStoreForm extends Component {
  render() {
    return (
      <>
        <form className="card create-store-form p-3">
          <div className="header-form pb-2 d-flex justify-content-between">
            <div>
              <p className="h3 font-weight-bold"> Crear tu tienda </p>
              <p className="lead font-weight-bold">
                Información de la tienda
              </p>
            </div>
            <div>
              <FiHelpCircle />
            </div>
          </div>

          <div className="body-form">
            <div className="form-group">
              <label htmlFor="name">Nombre de tu negocio</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoría</label>
              <input type="text" className="form-control" id="category" />
            </div>

            <div className="form-group">
              <label htmlFor="department">Departamento</label>
              <input type="text" className="form-control" id="department" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div className="footer-form">
            <p className="p-0 m-0">
              Después de esto podra agregar imagenes y mas información a su
              negocio
            </p>
            <button type="submit" className="btn btn-primary mt-2">
              Crear tu negocio
            </button>
          </div>
        </form>
      </>
    );
  }
}
