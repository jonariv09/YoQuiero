import React, {Component} from 'react'
import './index.scss'

import {FiChevronRight} from 'react-icons/fi'
const icons = {
  fontSize: 14,
}

export default class Categorias extends Component {
  render() {
    return (
      <>
        <div className="categories">
          <span className="text-uppercase"> Categorias </span>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Accesorios{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Teléfonos celulares{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Computadoras, Tabletas y
              Oficina{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Electrónica de consumo{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Drones, Juguetes y
              Pasatiempos{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Comida rapida platillos y
              más{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Zapatos, Ropa hombre y
              mujer{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Limpieza de interiores{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Industrial y científica{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Electrónica de motores y
              automóviles{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Aire libre, fitness y
              deportes{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Relojes y Joyas{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Zapatos y ropa{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Articulos de ferreteria{' '}
            </a>{' '}
          </li>
          <li className="item-categories">
            {' '}
            <a className="link-categories" href="/404">
              {' '}
              <FiChevronRight size={icons.fontSize} /> Mascotas{' '}
            </a>{' '}
          </li>
        </div>
      </>
    )
  }
}
