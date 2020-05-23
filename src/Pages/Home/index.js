import React from 'react'
import NavBar from '../../components/NavBar'
import Categories from '../../components/Categories'
import Carousel from '../../components/Carousel'

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <div className="container-fluid px-4">
          <div className="row mt-4 px-5">
            <div className="col-xl-3">
              <Categories />
            </div>
            <div className="col-xl-9 ">
              <Carousel />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}