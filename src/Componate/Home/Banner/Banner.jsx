import "./banner.css"
import "../../../index.css"
export default function banner() {
    return (
        <>
            <div className="Banner ">
                <div className="d-flex align-items-center  justify-content-center flex-column text-light text-center gap-1">
                    <div className="display-1">
                        We Are Total.
                    </div>
                    <div className="fs-4">
                        The only WordPress theme you'll ever need.
                    </div>
                    <div className="my-3 Banner_btn">
                        <button className="btn rounded-pill bg-transparent border border-3   text-light text-capitalize fs-5 py-2 px-3">learn more</button>
                    </div>
                </div>
            </div>
        </>
    )
}
