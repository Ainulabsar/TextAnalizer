import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text");
  const handleUpClick = () => {
    console.log("Uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Text","success")

  };
  const handleLoClick = () => {
    console.log("Lower is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Text","success")

  };
  const handleonchange = (e) => {
    console.log("Text Changes");
    setText(e.target.value);

  };
  const handleclear = () => {
   let newText = "";
   setText(newText)
   props.showAlert("Text is cleared","success")
 
  };

    const handletrim = () => {
   let newText = text.split(/[  ]+/);
   setText(newText.join(" "))
   props.showAlert("Text is trimmed","success")
   

   console.log("trim is done")
  };
  return (
    <>
      <div className="container" style={{ color:props.mode === 'dark'?'white' : 'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            style={{backgroundColor:props.mode === 'dark'?'#595f8b' : 'white', color:props.mode === 'dark'?'white' : 'black'}}
            onChange={handleonchange}
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handletrim}>
          trim
        </button>    
      </div>
      <div className="container" style={{ color:props.mode === 'dark'?'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          Number of Words = {text.split(" ").length} <br />
          Number of Characters = {text.length} <br />
          Time Taken = {0.008 * text.split(" ").length}
        </p>
        <h4>Priview</h4>
        <p>{text.length>0 ?text:"Enter the text above to show he preview"}</p>
      </div>
    </>
  );
}
