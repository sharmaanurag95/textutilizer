import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(prop) {
  const [text, setText] = useState("Enter your text here.");
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleTextBoxChange = (event) => {
    setText(event.target.value); //This is used to change/set the text to the manually changed text by the user.
  };

  return (
    <div className="mb-3">
      <h1>{prop.heading}</h1>
      <textarea
        className="form-control"
        value={text}
        onChange={handleTextBoxChange}
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <button className="btn btn-primary my-4" onClick={handleUpperCase}>
        Click to convert to Uppercase
      </button>
    </div>
  );
}
