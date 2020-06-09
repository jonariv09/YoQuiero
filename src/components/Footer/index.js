import React, { Component } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaTwitterSquare
} from "react-icons/fa";
import "./index.scss";

let iconStyles = {
  fontSize: 20
};

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer w-100 p-4">
          <div className="row">
            <div className="col-6">
              <span className="d-block lead"> Nosotros </span>
              <ul className="list-footer">
                <li className="item-footer">
                  {" "}
                  <a className="link-footer" href="#">
                    {" "}
                    Negocios{" "}
                  </a>{" "}
                </li>
                <li className="item-footer">
                  {" "}
                  <a className="link-footer" href="#">
                    {" "}
                    Blog{" "}
                  </a>{" "}
                </li>
                <li className="item-footer">
                  {" "}
                  <a className="link-footer" href="#">
                    {" "}
                    Sobre YoQuiero{" "}
                  </a>{" "}
                </li>
                <li className="item-footer">
                  {" "}
                  <a className="link-footer" href="#">
                    {" "}
                    Relaciones con nuevos clientes{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="col-6 d-flex justify-content-center align-items-center">
              <ul className="social-list d-flex justify-content-center">
                <a className="link-social" href="#">
                  {" "}
                  <FaFacebookSquare size={iconStyles.fontSize} />{" "}
                </a>
                <a className="link-social" href="#">
                  {" "}
                  <FaInstagramSquare size={iconStyles.fontSize} />{" "}
                </a>
                <a className="link-social" href="#">
                  {" "}
                  <FaWhatsappSquare size={iconStyles.fontSize} />{" "}
                </a>
                <a className="link-social" href="#">
                  {" "}
                  <FaTwitterSquare size={iconStyles.fontSize} />{" "}
                </a>
              </ul>
            </div>

            <div className="col-6"></div>

            <div className="col-6"></div>
          </div>
        </div>
      </>
    );
  }
}
