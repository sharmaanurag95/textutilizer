import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <Navbar
          title="Text Utilizer"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <div className="container my-3">
              <Textform
                heading="Enter your text in the below box:"
                mode={mode}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
