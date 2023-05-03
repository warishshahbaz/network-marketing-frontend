import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Crousel from './Crousal'
import Home from './Home'
import Vision from './Vision'
import Conatct from './ConatctCom'
import Footer from '../pages/Footer'

function Layout() {
  return (
  <>
     <Header />
    <Crousel style={{height:'30vh'}} />
    <Home/>
    <Vision/>
    {/* <Conatct/> */}
    <Footer />
    <Outlet/>
  </>
  )
}

export default Layout