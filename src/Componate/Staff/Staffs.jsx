import React from 'react'
import Staff_cards from '../Comman/Staff_cards'

let staff_Data = [
    {
        name: "Natalie Naples",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person1.jpg"
    },
    {
        name: "Liam Lions",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person2.jpg"
    },
    {
        name: "Heather Heath",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person3.jpg"
    },
    {
        name: "Frederick Farlen",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person4.jpg"
    },
    {
        name: "Amelia Adams",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person5.jpg"
    },
    {
        name: "Carl Craston",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person6.jpg"
    },
    {
        name: "Brent Baker",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person7.jpg"
    },
    {
        name: "Debbie Dowde",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person8.jpg"
    },
    {
        name: "William Wicks",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person9.jpg"
    },
    {
        name: "Michelle Michaels",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person10.jpg"
    },
    {
        name: "Patricia Parsons",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person11.jpg"
    },
    {
        name: "Ivan Ingle",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person12.jpg"
    },
    {
        name: "Jacob Jacobie",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person13.jpg"
    },
    {
        name: "Russell Richards",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person14.jpg"
    },
    {
        name: "Karen Kingston",
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/person15.jpg"
    }
];
export default function Staffs() {
    return (
        <>
            <section>
                <div className="container py-5">
                    <div className="row row-cols-1 gy-5 row-cols-md-2 row-cols-lg-3">

                        {staff_Data.map((data,index) => {
                            return <div className='col'>
                                <Staff_cards key={index} image={data.image} title={data.name} />
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
