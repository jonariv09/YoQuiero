import React from 'react'
import Navbar1 from '../../components/Navbar1/index.js'
import Navbar2 from '../../components/Navbar2/index.js'
import Navbar3 from '../../components/Navbar3/index.js'
import Navbar4 from '../../components/Navbar4/index.js'
import Categorias from '../../components/Categories/index.js'
import Carousel from '../../components/Carousel/index.js'
import Annoucement from '../../components/Annoucement/index.js'
import Slider1 from '../../components/Slider1/index.js'
import Slider2 from '../../components/Slider2/index.js'
import Slider3 from '../../components/Slider3/index.js'
import Informacion from '../../components/informacion/index.js'
import Footer from '../../components/Footer/index.js'

export default function Home() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />
      <div className="container-fluid px-4">
        <div className="row mt-4 px-5">
          <div className="col-xl-3">
            <Categorias />
          </div>
          <div className="col-xl-6">
            <Carousel />
          </div>
          <div className="col-xl-3">
            <Annoucement />
          </div>
        </div>
        <Slider1 />
        <br></br>
        <Slider2 />
        <br></br>
        <Slider3 />
        <br></br>
        <Informacion />
      </div>

      <Footer />
    </>
  )
}
