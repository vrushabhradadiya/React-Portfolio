import React from 'react'
import Navbar from "../Componate/Navbar/Navbar"
import Footer from '../Componate/Footer/Footer'
import GetstaffsLIne from '../Componate/Comman/GetstaffsLIne'
import Con_Banner from '../Componate/Contact/Con_Banner'
import Con_text from '../Componate/Contact/Con_text'
import Con_form from '../Componate/Contact/Con_form'
import Con_location from '../Componate/Contact/Con_location'
export default function Contact() {
    return (
        <>
            <Navbar />
            <Con_Banner />
            <Con_text/>
            <Con_form/>
            <Con_location/>
            <GetstaffsLIne />
            <Footer />
        </>
    )
}
