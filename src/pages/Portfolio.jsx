import React from 'react'
import Navbar from '../Componate/Navbar/Navbar'
import Footer from '../Componate/Footer/Footer'
import Pot_cards from '../Componate/Comman/Pot_cards'
import Portfolio_row from '../Componate/potfolio/Portfolio_row'

export default function Portfolio() {
  return (
    <>
    <Navbar/>
    {/* <Pot_cards/> */}
    <Portfolio_row/>
    <Footer/>
    </>
  )
}
