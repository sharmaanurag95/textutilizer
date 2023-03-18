import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";

function App() {
  return (
    <>
      <Navbar title="Text Editor" about="About Us" />
      <div className="container my-3">
        <Textform heading="Enter your text in the below box:" />
      </div>
    </>
  );
}

export default App;
