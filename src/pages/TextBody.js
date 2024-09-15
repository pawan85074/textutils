import React,{useState} from 'react'

export default function TextBody() {
    const handleUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowerCase=()=>{
       let newText=text.toLowerCase();
       setText(newText)
    }

    const handleClear=()=>{
        setText("")
    }
    const handleInp=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState("Enter the sentence here...")
  return (
    <div>   
        <div className="mb-3 my-5">
        <h1 className="bg-danger text-light">Enter The Sentence And Analyze It. </h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="17" value={text} onChange={handleInp}/>
        </div>
        <div className='text-center'>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpperCase}>UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowerCase}>LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>clear</button>
        </div>
    </div>
  )
}
