import Title from "../../Comman/Title"
import person1 from "../../../assets/Images/person1.jpg"
import person2 from "../../../assets/Images/person2.jpg"
import person3 from "../../../assets/Images/person3.jpg"
import person4 from "../../../assets/Images/person4.jpg"
import person5 from "../../../assets/Images/person5.jpg"
import person6 from "../../../assets/Images/person6.jpg"
import "../../../index.css"
export default function Team() {
    return (
        <>
            <div className="section container">
                <Title text={"Our"} bold={"Team"} description={"Meet our awesome team. We searched high and low for people who were highly qualified with years of experience in their fields. Checkout their bios to learn more about the staff you will be working with."} />

                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-lg-3 gy-4">
                        <div className="con">
                            <div>
                                <img src={person1} className='w-100' alt="" />
                            </div>
                            <div className='mt-3'>
                                <div className='fs-13 fw-bold'>
                                    Natalie Naples
                                </div>
                                <div className=' text-secondary fs-13'>
                                    Chief Executive Officer
                                </div>
                            </div>
                        </div>
                        <div className="con">
                            <div>
                                <img src={person2} className='w-100' alt="" />
                            </div>
                            <div className='mt-3'>
                                <div className='fs-13 fw-bold'>
                                    Liam Lions
                                </div>
                                <div className=' text-secondary fs-13'>
                                    Data Analyst
                                </div>
                            </div>
                        </div>
                        <div className="con">
                            <div>
                                <img src={person3} className='w-100' alt="" />
                            </div>
                            <div className='mt-3'>
                                <div className='fs-13 fw-bold'>
                                    Heather Heath
                                </div>
                                <div className=' text-secondary fs-13'>
                                    Software Engineer
                                </div>
                            </div>
                        </div>
                        <div className="con">
                            <div>
                                <img src={person4} className='w-100' alt="" />
                            </div>
                            <div className='mt-3'>
                                <div className='fs-13 fw-bold'>
                                    Frederick Farlen
                                </div>
                                <div className=' text-secondary fs-13'>
                                    Accountant
                                </div>
                            </div>
                        </div>
                        <div className="con">
                            <div>
                                <img src={person5} className='w-100' alt="" />
                            </div>
                            <div className='mt-3'>
                                <div className='fs-13 fw-bold'>
                                    Amelia Adams
                                </div>
                                <div className=' text-secondary fs-13'>
                                    Operations Manager
                                </div>
                            </div>
                        </div>
                        <div className="con">
                            <div>
                                <img src={person6} className='w-100' alt="" />
                            </div>
                            <div className='mt-3'>
                                <div className='fs-13 fw-bold'>
                                    Carl Craston
                                </div>
                                <div className=' text-secondary fs-13'>
                                    Advertising Manager
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
