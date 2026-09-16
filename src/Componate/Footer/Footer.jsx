import { RiFacebookCircleFill, RiTwitterXFill ,RiYoutubeFill ,RiWifiLine  } from "react-icons/ri"
export default function Footer() {
    return (
        <>

            <footer className=' py-5' style={{ backgroundColor: "#262626 " }} >
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
                            <h4 className="text-light">Recent News</h4>
                            <ul className='p-0 mt-3 ' style={{ listStyle: "none", color: "#aaa" }}>
                                <li>Don’t Just Stand There, Do Something!</li>
                                <li>Award Winning Video by One Ocean, One Breath</li>
                                <li>My Very First Ultra Marathon</li>
                                <li>Mobile Friendly Design</li>
                            </ul>
                        </div>


                        <div className="col-12 col-md-6 col-lg-3 text-white">
                            <h4 className="footer-title">Recent Work</h4>

                            <div className="work-item d-flex gap-3 py-3 border-top border-secondary align-items-center border-1 ">
                                <div style={{ width: "65px" }} className='rounded rounded-3 overflow-hidden'>
                                    <img src="https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/bird_mg-125x125@2x.jpg" className='w-100' alt="" />
                                </div>

                                <div>
                                    <h4 style={{ fontSize: "14px" }}>Down The Road</h4>
                                    <p className='text-secondary' style={{ fontSize: "14px" }}>November 24, 2013</p>
                                </div>
                            </div>

                            <div className="work-item d-flex gap-3 py-3 border-top border-secondary align-items-center border-1 ">
                                <div style={{ width: "65px" }} className='rounded rounded-3 overflow-hidden'>
                                    <img src="https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/united_cities-1-150x150.jpg" className='w-100' alt="" />
                                </div>

                                <div>
                                    <h4 style={{ fontSize: "14px" }}>Futuristic Modern City</h4>
                                    <p className='text-secondary' style={{ fontSize: "14px" }}>November 24, 2013</p>
                                </div>
                            </div>

                            <div className="work-item d-flex gap-3 py-3 border-top border-secondary align-items-center border-1 ">
                                <div style={{ width: "65px" }} className='rounded rounded-3 overflow-hidden'>
                                    <img src="https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/03/bunny-500x500.jpg" className='w-100' alt="" />
                                </div>

                                <div>
                                    <h4 style={{ fontSize: "14px" }}>Harvey, The Rabbit</h4>
                                    <p className='text-secondary' style={{ fontSize: "14px" }}>November 24, 2013</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-light">
                            <h4 className="footer-title">Contact Us</h4>
                            <div className="text-secondary py-3 ">
                                <p className='m-0 ' style={{ fontSize: "14px" }}>
                                    <strong>Phone:</strong> 800-123-456
                                </p>

                                <p className='m-0 ' style={{ fontSize: "14px" }}>
                                    <strong>Email:</strong> example@example.com
                                </p>

                                <p className='m-0 ' style={{ fontSize: "14px" }}>
                                    <strong>Twitter:</strong> @your-company
                                </p>
                            </div>

                            <h4 className="footer-title fs-4">
                                Follow Us
                            </h4>

                            <div className=" d-flex gap-2">
                                <div style={{ width: "34px", height: "34px" }} className='rounded-1 d-flex align-items-center justify-content-center bg-primary' >
                                    <RiFacebookCircleFill size={22} />
                                </div>
                                <div style={{ width: "34px", height: "34px" }} className='rounded-1 d-flex align-items-center justify-content-center bg-black' >
                                    <RiTwitterXFill size={22} />
                                </div>
                                <div style={{ width: "34px", height: "34px" }} className='rounded-1 d-flex align-items-center justify-content-center bg-danger' >
                                    <RiYoutubeFill size={22} />
                                </div>
                                <div style={{ width: "34px", height: "34px" }} className='rounded-1 d-flex align-items-center justify-content-center bg-warning' >
                                    <RiWifiLine size={22} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
