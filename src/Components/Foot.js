import React from "react";
import { Link } from "react-router-dom";
import './Styles/Foot.css'

function Foot() {
  return (
    <footer className="footer bg-dark p-1 fixed-bottom">
      <div className="container foot_container d-flex align-items-center justify-content-center p-3">
        <span className="text-muted">
          Copyright &copy; 2023
          <Link to="/home" className="foot_icon">Mian Website</Link>
        </span>
      </div>
    </footer>
  );
}
export default Foot;