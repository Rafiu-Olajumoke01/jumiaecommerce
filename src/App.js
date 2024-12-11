import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css"




const Home = React.lazy(() => import("./Pages/HomePage/Index"))
const Advert = React.lazy(() => import("./Pages/Advert/Index"))
const Banner = React.lazy(() => import("./Pages/BannerPage/Banner"))
const Beauty= React.lazy(() => import("./Pages/Beauty/Index"))
const Beverages= React.lazy(() => import("./Pages/Beverages/Index"))
const Cart= React.lazy(() => import("./Pages/CartPage/Cart"))
const Electronics= React.lazy(() => import("./Pages/Electronics/Index"))
const Homedeals= React.lazy(() => import("./Pages/Homedeals/Index")) 
const MobilePhone= React.lazy(() => import("./Pages/MobilePhones/Index")) 
const TopHomedeals= React.lazy(() => import("./Pages/TopHomedeals/Index")) 
const  SideBar= React.lazy(() => import("./Pages/SideBar/Sidebar")) 
const  Slider= React.lazy(() => import("./Pages/Slider/Slider")) 
const  SignUp= React.lazy(() => import("./Pages/SignUp/Signup")) 
const  FlashSales= React.lazy(() => import("./Pages/FlashSales/Flashsales")) 
const  OfficialStore= React.lazy(() => import("./Pages/OfficialStore/Official")) 
const  SecondBanner= React.lazy(() => import("./Pages/SecondBanner/BannerSecond")) 
const Blog= React.lazy(() => import("./Pages/Blog/Blog")) 



function App() {
  return (
    <div className="App">
      <React.Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Advert' element={<Advert />} />
            <Route path='/Banner' element={<Banner />} />
            <Route path='/Beauty' element={<Beauty />} />
            <Route path='/Beverages' element={<Beverages />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Electronics' element={<Electronics />} />
            <Route path='/Homedeals' element={<Homedeals />} />
            <Route path='/MobilePhone' element={<MobilePhone />} />
            <Route path='/TopHomedeals' element={<TopHomedeals />} />
            <Route path='/SideBar' element={<SideBar />} />
            <Route path='/Slider' element={<Slider />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/FlashSales' element={<FlashSales />} />
            <Route path='/OfficialStore' element={<OfficialStore />} />
            <Route path='/SecondBanner' element={<SecondBanner />} />


          </Routes>
        </BrowserRouter>
      </React.Suspense>

    </div >
  );
}

export default App;
