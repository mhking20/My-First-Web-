import React from "react";
import "./Styles/Fronthero.css";
import hero from "./images/mypic.jpg";
import { Link } from "react-router-dom";

function FrontHero() {
  return (
    <div className="container-fluid  bg-info fronthero_color vh-100 d-flex align-items-center justify-content-center">
      <div className="shadow bg-dark  fronthero_container p-4">
        <div className="fronthero_imgcontainer  overflow-hidden d-flex align-items-center justify-content-center">
          <div className="h-100 fronthero_radius">
            <img src={hero} alt="img" className="img-fluid fronthero_img" />
          </div>
        </div>
        <div className="fronthero_btncontainer d-flex align-items-center justify-content-center">
          <Link to="login">
            <button className="btn btn-primary m-2">Login</button>
          </Link>
          <Link to="reg">
            <button className="btn btn-danger m-2">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FrontHero;
