import React from 'react'
import Test from "./../Test"
import Sidebar from '../SideBar/Sidebar'
import MobilePage from "./../MobilePhones/Index"
import Slider from "./../Slider/Slider"
import SecondSidebar from './../SecondSidebar/SecondSidebar'
import Advert from './../Advert/Index'
import Flashsales from '../FlashSales/Flashsales'
import MobilePhonePage from './../MobilePhones/Index'
import Beauty from './../Beauty/BeautyMain'
import Banner from '../BannerPage/Banner'
import OfficialStore from './../OfficialStore/Official'
import Beverage from './../Beverages/Index'
import SecondBanner from './../SecondBanner/BannerSecond'
import HomedealsMain from '../Homedeals/HomedealsMain'
import ElectronicPage from '../Electronics/Index'
import Blog from '../Blog/Blog'
import FooterPage from '../../Component/Footer/Index'

function HomeMain() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-2">
            <Sidebar />
          </div>

          <div className="col-md-8">
            <Slider />
          </div>

          <div className="col-md-2">
            <SecondSidebar />
          </div>
        </div>

        <div className="advert mt-3">
          <Advert />
        </div>

        <div className="flashsale mt-3">
          <Flashsales />
        </div>

        <div className="phone mt-3">
          <ElectronicPage/>
        </div>


        <div className="phone mt-3">
          <MobilePhonePage />
        </div>

        <div className="beauty mt-3">
          <Beauty />
        </div>
        

        <div className="banner mt-3">
          <Banner />
        </div>

        <div className="phone mt-3">
          <OfficialStore />
        </div>

        <div className="phone mt-3">
          <Beverage />
        </div>

        <div className="phone mt-3">
          <SecondBanner />
        </div>

        <div className="phone mt-3">
          <HomedealsMain/>
        </div>

        <div className="phone mt-3">
          <Blog/>
        </div>

      </div>

      <FooterPage/>
    </div>
  )
}

export default HomeMain
