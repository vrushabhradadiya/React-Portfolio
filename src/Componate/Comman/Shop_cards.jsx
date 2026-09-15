export default function Shop_cards({img, title, price}) {
  return (
    <>
      <div className="card w-100 ">
        <div>
          <img src={img} className='w-100' alt="" />
        </div>
        <div className="card-body">
          <div className='fs-6 fw-medium text-capitalize'>
            {title}
          </div>
          <div className='text-warning fs-5'>
            ★★★★☆
          </div>
          <div className=' text-secondary'>
            {`$${parseInt(price).toFixed(2)}`}
          </div>
        </div>
      </div>

    </>
  )
}
