import React from 'react'
import Navbar from '../Componate/Navbar/Navbar'
import Shop_banner from '../Componate/Shop/Shop_banner'
import Shop_cards from '../Componate/Comman/Shop_cards'
import Shop_card_rows from '../Componate/Shop/Shop_card_rows'
import GetstaffsLIne from '../Componate/Comman/GetstaffsLIne'
import Footer from '../Componate/Footer/Footer'

export default function Shop() {
  return (
    <>
    <Navbar/>
    <Shop_banner/>
    <Shop_card_rows/>
    <GetstaffsLIne/>
    <Footer/>
    </>
  )
}
