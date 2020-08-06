import React, {Component} from 'react'
import {FiHelpCircle} from 'react-icons/fi'
import {Redirect} from 'react-router-dom'
import './index.scss'
import './overwrite.scss'
import LoginModal from '../LoginModal'

export default class CreateStoreForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: null,
      name: '',
      category: '',
    }

    this.handleCreateStore = this.handleCreateStore.bind(this)
  }

  handleCreateStore() {
    this.setState({redirect: '/storeProfile'})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <>
        <form
          className="card create-store-form p-3"
          onSubmit={this.handleCreateStore}
        >
          <div className="header-form pb-2 d-flex justify-content-between">
            <div>
              <p className="h3 font-weight-bold"> Crear tu tienda </p>
              <p className="lead font-weight-bold">Información de la tienda</p>
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
            <a
              href=""
              role="button"
              className="btn btn-primary mt-2"
              data-toggle="modal"
              data-target="#loginmodal"
            >
              Crear tu negocio
            </a>
          </div>
        </form>

        <LoginModal to="/storeProfile" />
      </>
    )
  }
}
