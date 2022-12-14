import React from 'react'
import '../styles/form.css'

function Form() {
  return (
    <>
        <style></style>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter code and press 'Submit'</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={`For example: \ncout<<"Hello World"`}></textarea>
        </div>

        <button className="btn btn-outline-warning">Submit Code</button>
    </>
  )
}

export default Form