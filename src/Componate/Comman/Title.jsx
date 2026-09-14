
export default function title({text,bold,description}) {
    return (
        <>
            <div className="container  d-flex justify-content-center flex-column gap-3 align-items-center ">
                <div className="display-6 accordion">{text}
                 <span className='fw-bold'>{` ${bold}`}</span>
                </div>
                <div className='text-center text-secondary ' >
                    {description}
                </div>
            </div>
        </>
    )
}
