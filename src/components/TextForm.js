import React, { useState } from "react";

export default function TextForm(props) {
  // Creating a state , here twxt is a variable which holds the value of useState and
  //   setText is a method via which we can update the value of text.
  const [text, setText] = useState("Enter  your text here.");

  // Defining convert to  uppercase function
  const textToUppercase = () => {
    // console.log("Convert to uppercase button has been clicked"+text);
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };
  // Handling onChange event
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="textBox" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="textBox"
          value={text}
          onChange={handleOnChange}
          rows="9"
        />
      </div>
      <button
        type="button"
        className="btn btn-primary "
        onClick={textToUppercase}
      >
        Convert to Uppercase
      </button>
    </>
  );
}
