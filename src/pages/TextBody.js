import React,{useState} from 'react'

export default function TextBody() {
  return (
    <div>
         
        <div className="mb-3 my-5">
        <h1>Enter The Sentence And Analyze It. </h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value="Enter the sentence here...."/>
        </div>
        <div className='text-center'>
        <button type="button" className="btn btn-primary mx-2">UpperCase</button>
        <button type="button" className="btn btn-primary mx-2">LowerCase</button>
        <button type="button" className="btn btn-primary mx-2">Primary</button>
        <button type="button" className="btn btn-primary mx-2">Primary</button>
        <button type="button" className="btn btn-primary mx-2">clear</button>
        </div>
    </div>
  )
}
