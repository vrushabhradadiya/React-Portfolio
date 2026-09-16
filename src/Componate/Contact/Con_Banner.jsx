import React from 'react'

export default function Con_Banner() {
    return(
        <>
            <div className=' d-flex flex-column  align-items-center justify-content-center con_Banner position-relative ' style={{background: "url(https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/03/contact-us1.jpg)", padding : "100px 0"}} >
                <div className='position-absolute h-100 w-100 top-0 bg-black opacity-50 '></div>
                <h2 className='text-white z-1'>Contact Us </h2>
                <div className='text-white z-1'>
                    Have a comment or question? Send us a message.
                </div>
            </div>           
        </>
    )
}
