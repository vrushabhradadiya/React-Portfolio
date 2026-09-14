import { RiTwitterXLine, RiFacebookCircleFill, RiLinkedinFill, RiPhoneFill, RiMailFill } from "react-icons/ri"

export default function Staff_cards({ image, title }) {
    return (
        <div className="p-0 ">

            <img
                src={image}
                className="card-img-top "
                alt={title}
            />

            <div className="card-body ps-1 pt-4 ">
                <h3 className="card-title fs-6 mb-4">
                    {title} 
                </h3>
                <p className="card-text text-secondary fs-6 lh-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar nisl enim, eget dignissim felis posuere in. Ut suscipit et mi facilisis posuere. Nulla iaculis placerat dui in rutrum. Nulla…
                </p>
                <div className="d-flex align-items-center gap-2 mt-4">

                    <div className="border  rounded-circle  "  >
                        <a href="#">
                            <RiTwitterXLine color="#757575" className="m-1" />
                        </a>
                    </div>

                    <div className="border rounded-circle ">
                        <a href="#">
                            <RiFacebookCircleFill color="#757575" className="m-1" />
                        </a>
                    </div>

                    <div className="border rounded-circle ">
                        <a href="#">
                            <RiLinkedinFill color="#757575" className="m-1" />
                        </a>
                    </div>

                    <div className="border rounded-circle ">
                        <a href="#">
                            <RiPhoneFill color="#757575" className="m-1" />
                        </a>
                    </div>

                    <div className="border rounded-circle ">
                        <a href="#">
                            <RiMailFill color="#757575" className="m-1" />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
}