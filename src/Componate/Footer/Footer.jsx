import React from 'react'

export default function Footer() {
    return (
        <>

            <footer className='bg-dark py-5' >
                <div className="container ">
                    <div className="row g-4">

                        <div className="col-12 col-md-6 col-lg-3">
                            <img src="https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/01/logo-2.png" alt="" />
                            <p className="text-secondary mt-3 fs-6">
                                Welcome to Base, a simple business layout designed to
                                highlight your company’s strengths. Use this space to
                                introduce your brand, share your mission, or outline
                                the services you offer. Clean design and flexible
                                sections make it easy.
                            </p>
                        </div>


                        <div className="col-12 col-md-6 col-lg-3">
                            <h3 className="text-light">Recent News</h3>
                            <ul className='p-0 mt-3 ' style={{listStyle:"none", color:"#aaa"  }}>
                                <li>Don’t Just Stand There, Do Something!</li>
                                <li>Award Winning Video by One Ocean, One Breath</li>
                                <li>My Very First Ultra Marathon</li>
                                <li>Mobile Friendly Design</li>
                            </ul>
                        </div>


                        {/* Recent Work */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <h3 className="footer-title">Recent Work</h3>

                            {/* Work 1 */}
                            <div className="work-item">
                                <img
                                    src="/images/work1.jpg"
                                    alt="Down The Road"
                                />

                                <div>
                                    <h4>Down The Road</h4>
                                    <p>November 24, 2013</p>
                                </div>
                            </div>

                            {/* Work 2 */}
                            <div className="work-item">
                                <img
                                    src="/images/work2.jpg"
                                    alt="Futuristic Modern City"
                                />

                                <div>
                                    <h4>Futuristic Modern City</h4>
                                    <p>November 24, 2013</p>
                                </div>
                            </div>

                            {/* Work 3 */}
                            <div className="work-item">
                                <img
                                    src="/images/work3.jpg"
                                    alt="Harvey The Rabbit"
                                />

                                <div>
                                    <h4>Harvey, The Rabbit</h4>
                                    <p>November 24, 2013</p>
                                </div>
                            </div>
                        </div>


                        {/* Contact */}
                        <div className="col-12 col-md-6 col-lg-3">

                            <h3 className="footer-title">Contact Us</h3>

                            <div className="contact">
                                <p>
                                    <strong>Phone:</strong> 800-123-456
                                </p>

                                <p>
                                    <strong>Email:</strong> example@example.com
                                </p>

                                <p>
                                    <strong>Twitter:</strong> @your-company
                                </p>
                            </div>

                            <h3 className="footer-title follow-title">
                                Follow Us
                            </h3>

                            <div className="social-icons">

                                <a href="#" className="facebook">
                                    f
                                </a>

                                <a href="#" className="twitter">
                                    𝕏
                                </a>

                                <a href="#" className="youtube">
                                    ▶
                                </a>
                                <a href="#" className="rss">
                                    ◔
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
