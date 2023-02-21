import React from "react";

function Intro() {
  return (
    <div className="container bg-dark text-light p-5 mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h1>Welcome To My Full Stack Website</h1>
        </div>
        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center mt-5 mb-5">
            <button className="btn btn-primary">View My Projects</button>
        </div>
      </div>
      <hr/>
      <div>
      <p>Here you will find my different Mern Stack Projects. </p>
      </div>
    </div>
  );
}

export default Intro;
