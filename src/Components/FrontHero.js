import React from "react";
import "./Styles/Fronthero.css";
import hero from "./images/mypic.jpg";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Auth } from "./Middleware";

function FrontHero() {
  const navigate = useNavigate()
  Auth()
  const handleDemo = () => {
      localStorage.setItem("demo" , true)
      navigate("/home")
  }
  
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
            <button className="btn btn-secondary m-2" onClick={() => handleDemo()}>Demo</button>
        </div>
      </div>
    </div>
  );
}


export default connect()(FrontHero)
