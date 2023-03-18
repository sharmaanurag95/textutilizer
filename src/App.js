import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#061d42";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Text Editor"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Textform heading="Enter your text in the below box:" mode={mode} />
      </div>
    </>
  );
}

export default App;
