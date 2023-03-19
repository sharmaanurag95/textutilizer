import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <div
        className="card my-5"
        style={{
          width: "18rem;",
          backgroundColor: props.mode === "light" ? "white" : "grey",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">About Us</h5>
          <p className="card-text my-3">
            This single page website is created to test the functionality of
            React.
          </p>
          <p>This website is developed by IceBurger.</p>
        </div>
      </div>
    </div>
  );
}
