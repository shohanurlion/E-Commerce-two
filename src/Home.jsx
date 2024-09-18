import React from 'react'
import Banner from '../src/Components/Banner/Banner'
import Newarrival from './Components/Newarrival/Newarrival'
import Recart from './Components/Cart/Recart'
import Offerproduct from './Components/Offerproducts/Offerproduct'

const Home = () => {
  return (
   <>
    <Banner/>
    <Offerproduct/>
    <Newarrival/>
   </>
  )
}

export default Home