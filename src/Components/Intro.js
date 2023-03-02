import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Intro() {
  const elRef = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("theme_1") === "true") {
      elRef.current.classList.remove(
        "bg-dark",
        "text-light",
        "bg-info",
        "text-dark"
      );
      elRef.current.classList.add("bg-App", "text-App");
    }
    if (localStorage.getItem("theme_2") === "true") {
      elRef.current.classList.remove(
        "bg-dark",
        "text-light",
        "bg-App",
        "text-App"
      );
      elRef.current.classList.add("bg-info", "text-dark");
    }
  });
  return (
    <div className="container bg-dark text-light p-5 mt-5 mb-5" ref={elRef}>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h1>Welcome To My Full Stack Website</h1>
        </div>
        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center mt-5 mb-5">
          <Link to="/projects">
            <button className="btn btn-primary">View My Projects</button>
          </Link>
        </div>
      </div>
      <hr />
      <div>
        <p>Here you will find my different Mern Stack Projects. </p>
      </div>
    </div>
  );
}

export default connect()(Intro);
