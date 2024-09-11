import React from 'react'
import Navbars from '../Navbar/Hedars/Hedars'
import Hedars from '../Navbar/Navbars'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
const Leyout = () => {
  return (
    <>
    <Hedars/>
    <Navbars/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Leyout