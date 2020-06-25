import React, {Component} from 'react'
import './index.scss'
import LeftSideMenu from '../../components/LeftSideMenu'
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts'

import {FiArrowUp} from 'react-icons/fi'

import './overwrite.scss'

const data = [
  {name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20]},
  {name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40]},
  {name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40},
  {name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20},
  {name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28},
  {name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20]},
  {name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40]},
  {name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28},
  {name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28},
  {name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60]},
]

export default class Inventory extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div id="wrapper">
          <LeftSideMenu />
          <div id="content-wrapper">
            <div id="content">
              <div className="row">
                <span className=""> Tablero </span>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 d-flex flex-wrap">
                  <div className="card m-1">
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">
                        Clientes
                      </h6>
                      <h5 className="card-text text-bold mt-4">1, 000</h5>
                      <div className="d-flex flex-column cuadro">
                        <div className="cuadro-analitics">
                          <FiArrowUp className="icon-cuadro mr-3" />
                          {6.12}%
                        </div>
                        <span className="text-muted">Desde el mes pasado</span>
                      </div>
                    </div>
                  </div>

                  <div className="card m-1">
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">Pedidos</h6>
                      <h5 className="card-text text-bold mt-4">10, 500</h5>
                      <div className="d-flex flex-column cuadro">
                        <div className="cuadro-analitics">
                          <FiArrowUp className="icon-cuadro mr-3" />
                          {7.32}%
                        </div>
                        <span className="text-muted">Desde el mes pasado</span>
                      </div>
                    </div>
                  </div>

                  <div className="card m-1">
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">
                        Ingresos
                      </h6>
                      <h5 className="card-text text-bold mt-4">C$88, 500</h5>
                      <div className="d-flex flex-column cuadro">
                        <div className="cuadro-analitics">
                          <FiArrowUp className="icon-cuadro mr-3" />
                          {6.24}%
                        </div>
                        <span className="text-muted">Desde el mes pasado</span>
                      </div>
                    </div>
                  </div>

                  <div className="card m-1">
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">
                        Crecimiento
                      </h6>
                      <h5 className="card-text text-bold mt-4">+30, 54%</h5>
                      <div className="d-flex flex-column cuadro">
                        <div className="cuadro-analitics">
                          <FiArrowUp className="icon-cuadro mr-3" />
                          {4.43}%
                        </div>
                        <span className="text-muted">Desde el mes pasado</span>
                      </div>
                    </div>
                  </div>

                  {/*{*/}
                  {/*  [1, 2, 3, 4].map((index, value) => (*/}
                  {/*    <div className="card m-1">*/}
                  {/*      <div className="card-body">*/}
                  {/*        <h5 className="card-title">Card title</h5>*/}
                  {/*        <h6 className="card-subtitle mb-2 text-muted">Card*/}
                  {/*          subtitle</h6>*/}
                  {/*        <p className="card-text">Some quick example text to*/}
                  {/*          build on the card title and make up the bulk of the*/}
                  {/*          card's content.</p>*/}
                  {/*        <a href="#" className="card-link">Card link</a>*/}
                  {/*        <a href="#" className="card-link">Another link</a>*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  ))*/}
                  {/*}*/}
                </div>

                <div className="col-md-6 col-sm-12">
                  <LineChart
                    width={400}
                    height={400}
                    data={data}
                    margin={{top: 5, right: 20, left: 10, bottom: 5}}
                  >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <CartesianGrid stroke="#f2f4f7" />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#71cc6c"
                      yAxisId={0}
                    />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#2097f3"
                      yAxisId={1}
                    />
                  </LineChart>
                </div>
              </div>

              {/*{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, value) => (*/}
              {/*  <>*/}
              {/*    <div className="alert alert-primary" role="alert">*/}
              {/*      A simple primary alert—check it out!*/}
              {/*    </div>*/}
              {/*    <div className="alert alert-secondary" role="alert">*/}
              {/*      A simple secondary alert—check it out!*/}
              {/*    </div>*/}
              {/*    <div className="alert alert-success" role="alert">*/}
              {/*      A simple success alert—check it out!*/}
              {/*    </div>*/}
              {/*    <div className="alert alert-danger" role="alert">*/}
              {/*      A simple danger alert—check it out!*/}
              {/*    </div>*/}
              {/*    <div className="alert alert-warning" role="alert">*/}
              {/*      A simple warning alert—check it out!*/}
              {/*    </div>*/}
              {/*    <div className="alert alert-info" role="alert">*/}
              {/*      A simple info alert—check it out!*/}
              {/*    </div>*/}
              {/*    <div className="alert alert-light" role="alert">*/}
              {/*      A simple light alert—check it out!*/}
              {/*    </div>*/}
              {/*    <div className="alert alert-dark" role="alert">*/}
              {/*      A simple dark alert—check it out!*/}
              {/*    </div>*/}
              {/*  </>*/}
              {/*))}*/}
            </div>
          </div>
        </div>
      </>
    )
  }
}
