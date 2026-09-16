import React from 'react'

export default function Con_location() {
    return (
        <>
            <div className="container">

                <div className=" py-5 row align-items-center ">
                    <div className='d-flex flex-column align-items-center col-12 col-lg-4 '>
                        <div className='py-3 text-center'>
                            <h5>Location</h5>
                            <p className='m-0 w-75 mx-auto'>
                                Our doors, ears and break room are always open (or at least Monday-Friday, from 9am-5pm).
                            </p>
                        </div>
                        <div className='text-secondary py-3 w-100 text-center border-1 border-top border-bottom'>
                            <p className='m-0'>1234 Main Street</p>
                            <p className='m-0' >
                                Anytown, USA 56789
                            </p>
                        </div>
                        <div className='text-secondary py-3'>
                            <p className='m-0'> (555) 555-5555</p>
                            <p className='m-0'>
                                (555) 555-4444
                            </p>
                        </div>
                    </div>
                    <div className='col col-12 col-lg-8'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.1276859926725!2d72.88557891021635!3d21.21561948125417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7084d49f51%3A0x2cdbfdfbb93f2c07!2sCreative%20Design%20%26%20Multimedia%20Institute%20-%20Data%20Science%20%7C%20Data%20Analytics%20%7C%20Ethical%20Hacking%20%7C%20Full%20Stack%20Development!5e1!3m2!1sen!2sin!4v1789549876720!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
