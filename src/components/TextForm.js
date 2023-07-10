import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpclick = () => {
        console.log("click" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = () => {
        console.log("click" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("change");
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#222f04':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="7"></textarea>
                </div>
                <button disabled={text.length===0}className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
            </div>
        </>
    )

}

