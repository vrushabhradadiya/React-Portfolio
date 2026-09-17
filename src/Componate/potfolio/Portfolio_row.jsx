import React from 'react'
import Pot_cards from '../Comman/Pot_cards';
const projects = [
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/bird_mg.jpg",
        title: "Down The Road",
        description: "This project showcases a full branding suite developed for a fictional lifestyle company, Luma & Co."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/united_cities-1.jpg",
        title: "Futuristic Modern City",
        description: "A creative project focused on futuristic city design and modern visual development."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/03/bunny.jpg",
        title: "Harvey, The Rabbit",
        description: "A creative advertising and development project featuring Harvey, the rabbit."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/cheeseburger-1.jpg",
        title: "A Delicious Cheeseburger",
        description: "A creative advertising project showcasing a delicious cheeseburger."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/map-brazil-1.jpg",
        title: "Sprint To Brazil",
        description: "An advertising and design project inspired by Brazil and creative travel visuals."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/hologram-1.jpg",
        title: "A Collage Of Artwork",
        description: "A photography project featuring a creative collage of artwork."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/Subash-Dharel.jpg",
        title: "Making Mockups",
        description: "A design and development project focused on creating creative mockups."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/03/dog.jpg",
        title: "Super Secret Terrier Portrait",
        description: "An advertising and design project featuring a terrier portrait."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/Jakub-Spitzer.jpg",
        title: "A Model App Adventure",
        description: "A photography project featuring a model and an adventurous visual concept."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/Bike.jpg",
        title: "Perfect Bikes",
        description: "A creative design and marketing project focused on bicycles."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/03/Jaroslav-Hach.jpg",
        title: "Tablet Mockup",
        description: "A design project featuring a professional tablet mockup."
    },
    {
        img: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2013/12/clock.jpg",
        title: "Time & Space",
        description: "An advertising and marketing project exploring the concepts of time and space."
    }
];
export default function Portfolio_row() {
    return (
        <>
            <div className="container py-5">

                <div className=' row row-cols-1 row-cols-lg-3 g-3'>
                    {projects.map((data, idx) => {
                        console.log(data.img)
                        return (
                            <div className="col" key={idx}>
                                <Pot_cards
                                    image={data.img}
                                    title={data.title}
                                    description={data.description}
                                />
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )
}
