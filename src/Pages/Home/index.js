import React from 'react'
import NavBar from '../../components/NavBar'
import Categories from '../../components/Categories'
import Carousel from '../../components/Carousel'
import InterestingProducts from '../../components/InterestingProducts'
import FeaturedProducts from '../../components/FeaturedProducts'
import Footer from '../../components/Footer'
import AboveNavBar from "../../components/AboveNavBar";
import SubNavBar from "../../components/SubNavBar";
import './index.scss'

export default function Home() {
  return (
    <>
        <AboveNavBar />
        <NavBar />
        <SubNavBar />
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
        
        <div className="products-container container-fluid px-4">
          <InterestingProducts />
          <FeaturedProducts />
        </div>

        <Footer />
    </>
  )
}