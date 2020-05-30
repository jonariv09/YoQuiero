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
              <p class="h3 font-weight-bold"> Crear tu tienda </p>
              <p class="lead font-weight-bold">
                Información de la tienda
              </p>
            </div>
            <div>
              <FiHelpCircle />
            </div>
          </div>

          <div className="body-form">
            <div class="form-group">
              <label for="name">Nombre de tu negocio</label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="form-group">
              <label for="category">Categoría</label>
              <input type="text" class="form-control" id="category" />
            </div>

            <div class="form-group">
              <label for="department">Departamento</label>
              <input type="text" class="form-control" id="department" />
            </div>
            <div class="form-group">
              <label for="description">Descripción</label>
              <textarea
                class="form-control"
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
            <button type="submit" class="btn btn-primary mt-2">
              Crear tu negocio
            </button>
          </div>
        </form>
      </>
    );
  }
}
