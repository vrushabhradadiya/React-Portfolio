import Title from "../../Comman/Title"
import "./work.css"
import "../../../index.css"
export default function Work() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <Title text={"Our "} bold={"Work"} description={"Checkout some of our finished projects. We worked hard on these, and we think it shows. This should give you an idea of the quality of work you will receive when you hire us for you project."} />
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 g-3 mt-4 row-cols-lg-4">
                        <div className="col work_img ">
                            <img src={"https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/bird_mg.jpg"} className="w-100 " alt="" />
                        </div>
                        <div className="col work_img">
                            <img src={`https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/united_cities-1.jpg`} className="w-100 " alt="" />
                        </div>
                        <div className="col work_img">
                            <img src={`https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/03/bunny.jpg`} className="w-100 " alt="" />
                        </div>
                        <div className="col work_img">
                            <img src={`https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/cheeseburger-1.jpg`} className="w-100 " alt="" />
                        </div>
                        <div className="col work_img">
                            <img src={`https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/map-brazil-1.jpg`} className="w-100 " alt="" />
                        </div>
                        <div className="col work_img">
                            <img src="https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/hologram-1.jpg" className="w-100 " alt="" />
                        </div>
                        <div className="col work_img">
                            <img src="https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2016/10/Subash-Dharel.jpg" alt="" className="w-100 " />
                        </div>
                        <div className="col work_img">
                            <img src="https://totalwpthemedemo.com/base/wp-content/uploads/sites/2/2014/03/dog.jpg" alt="" className="w-100 " />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
