import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text here.");
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleTextBoxChange = (event) => {
    setText(event.target.value); //This is used to change/set the text to the manually changed text by the user.
  };

  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleTextBoxChange}
          id="exampleFormControlTextarea1"
          rows="3"
          style={{ backgroundColor: props.mode === "light" ? "white" : "grey" }}
        ></textarea>
        <button className="btn btn-primary my-4 mx-2" onClick={handleUpperCase}>
          Click to convert to Uppercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleLowerCase}>
          Click to convert to Lowercase
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text Stats: </h2>
        <p>Number of words: {text.split(" ").length}</p>
        <p>Total character counts: {text.length}</p>
      </div>
    </>
  );
}
