import React from 'react'
import Shop_cards from '../Comman/Shop_cards';

let shop_data = [
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop1.jpg",
        name: "Colorful Silk Shirt",
        price: 119.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop4.jpg",
        name: "White Lace Top",
        price: 72.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop6.jpg",
        name: "Sheer Black Blouse",
        price: 339.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop26.jpg",
        name: "Classic Black Jumper",
        price: 89.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2015/03/aviator1.jpg",
        name: "Aviator Sunglasses",
        price: 25.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop41.jpg",
        name: "Glitter Platform Heels",
        price: 59.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop29.jpg",
        name: "Leather Jacket",
        price: 162.99
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop9.jpg",
        name: "Flowy Pink Top",
        price: 29.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop11.jpg",
        name: "Basic Peasant Shirt",
        price: 215.99
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2015/03/cateye1.jpg",
        name: "Cateye Sunglasses",
        price: 35.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop32.jpg",
        name: "Striped Rugby Shirt",
        price: 99.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop34.jpg",
        name: "Olive Green Jacket",
        price: 68.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop44.jpg",
        name: "Colorful Wedges",
        price: 49.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2015/03/clubmaster1.jpg",
        name: "Clubmaster Sunglasses",
        price: 30.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop13.jpg",
        name: "Comfy Demin Shirt",
        price: 34.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop36.jpg",
        name: "Red Sweater",
        price: 89.99
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop38.jpg",
        name: "Nautical Pullover",
        price: 14.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2015/03/round1.jpg",
        name: "Artsy Sunglasses",
        price: 28.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop15.jpg",
        name: "Emerald Sweatshirt",
        price: 29.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop17.jpg",
        name: "Navy Moto Jacket",
        price: 109.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop19.jpg",
        name: "Modern Citron Coat",
        price: 54.99
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop21.jpg",
        name: "Playful Leather Vest",
        price: 65.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop23.jpg",
        name: "Floral Blouse",
        price: 25.00
    },
    {
        image: "https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/04/shop47.jpg",
        name: "Woven Platform Heels",
        price: 77.00
    }
];

export default function Shop_card_rows() {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 py-5 g-4 border-0">
                    {
                        shop_data.map((value, index) => {
                            return (
                                <div className='col '>
                                    <Shop_cards key={index} img={value.image} title={value.name} price={value.price} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
