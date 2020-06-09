import React, { Component } from 'react'
import {FiChevronRight} from 'react-icons/fi'
import './index.scss'

const icons = {
  fontSize: 14
} 

export default class Categories extends Component {
  
  render() {
    return(
      <>
        <div className="categories">
          <span className="text-uppercase"> Categorias </span>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Accesorios </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Teléfonos celulares y accesorios </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Computadoras, Tabletas y Oficina </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Electrónica de consumo </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Drones, Juguetes y Pasatiempos </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Salud y cuidado personal </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Mejoras para el hogar y herramientas </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Hogar & Jardín </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Industrial y científica </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Electrónica de motores y automóviles </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Aire libre, fitness y deportes </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Relojes y Joyas </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Zapatos y ropa </a> </li>
          <li className="item-categories"> <a className="link-categories" href="/404">  <FiChevronRight size={icons.fontSize}/> Promoción Gearbest </a> </li>
          
        </div>
      </>
    )
  }

} 

