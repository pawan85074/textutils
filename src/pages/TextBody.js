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
    const handleCopyText=()=>{
       const text= document.getElementById("Textarea")
       text.select();
       navigator.clipboard.writeText(text.value)
       alert("Text Copy")

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
        <h1 className="bg-danger text-light text-center">Enter The Sentence And Analyze It. </h1>
        <textarea className="form-control" id="Textarea" rows="11" value={text} onChange={handleInp}/>
        </div>
        <div className='text-center'>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpperCase}>UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowerCase}>LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>clear</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopyText}>Copy</button>
        </div>
        <div className='container my-3'>
         <h2 >Your Text Summary</h2>
         <p className='text-light font-weight-bold pb-3'>Total words : {text.split(" ").length} <br/> Total Characters : {text.length} <br/>Read Time : {0.08*text.split(" ").length} min</p>
        </div>
    </div>
  )
}
