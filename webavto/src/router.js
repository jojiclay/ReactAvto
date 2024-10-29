import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import CaravanComponents from './components/caravan/index.jsx'
import TuningComponents from './components/tuning/index.jsx'
import UsecCarComponents from './components/usedcar/index.jsx'
import NotFound from './404/index.jsx'
import MotorComponent from './components/motor/index.jsx'
import CampingPlaceComponents from './components/campingplace/index.jsx'
import CampingPlacePage from './components/campingplace/CampingPlacePage/CampingPlacePage.jsx'
import Signpage from './auth/Sign In Page/signpage.jsx'
import Createpage from './auth/Create Page/createpage.jsx'
import GridPageComponents from './Gridpage/gridpage.jsx'
import Navbar from './components/navbar/index.jsx'
import Footer from './components/footer/index.jsx'
import SimpleSlider from './Camper/Camper.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartWrapper from './components/CartWrapper/CartWrapper.jsx'
import AccordionUsage from './components/CompareOurModels/CompareOurModels.jsx'

const RouterComponents = () => {
const location = useLocation()
const hideNavbar = location.pathname === "/sign-page" || location.pathname === "/registrate"

  return (
    <>
    { !hideNavbar  &&  <Navbar/> }
    <Routes>
       <Route path='/' element={<MotorComponent/>} />
        <Route path='/motor' element={<MotorComponent/>} />
        <Route path='/motor/:id' element={<GridPageComponents/>} />
        <Route path='/sign-page' element={<Signpage/>} />
        <Route path='/registrate' element={<Createpage/>} />
        <Route path='/caravan' element={<CaravanComponents/>} />
        <Route path='/tuning' element={<TuningComponents/>} />
        <Route path='/camper' element={<SimpleSlider/>} />
        <Route path='/used-car' element={<UsecCarComponents/>} />
        <Route path='/camping-place' element={<CampingPlaceComponents/>}/>
        <Route path='/camping' element={<CampingPlacePage/>} />
        <Route path='/CampareOurModels' element={<AccordionUsage/>} />
        <Route path='/cart/:id' element={<CartWrapper/>} />
        <Route path='*' element={<NotFound/>} />
    </Routes>
    {!hideNavbar &&   <Footer/>}
    </>
  )
}

export default RouterComponents