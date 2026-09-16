import React from 'react'

export default function () {
  return (
    <>
      <div className="bg-light py-5 ">
        <form className='container'>
          <div className='d-flex w-100 gap-3'>
            <div className="mb-3 w-100">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />

            </div>
            <div className="mb-3 w-100">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div>
            <label htmlFor="yext" className="form-label">
                massage
              </label>
             <textarea name="" rows={5} className='w-100' id="text"></textarea>
          </div>
  
          <button type="submit" className="w-100 mt-2 btn btn-primary">
            Submit
          </button>
        </form>
      </div>

    </>
  )
}
