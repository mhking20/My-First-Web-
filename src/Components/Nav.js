import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Styles/Nav.css'

function Nav() {
  const [height, setheight] = useState(0);
  const myRef = useRef(window);
  const ClassRef = useRef("");

  const handelscroll = () => {
    const hght = myRef.current.scrollY;
    setheight(hght);
  };
  window.addEventListener("scroll", handelscroll);
  useEffect(() => {
    handelscroll();
    if (height > 50) {
      ClassRef.current.classList.add("fixed-top");
    } else if (height < 50) {
      ClassRef.current.classList.remove("fixed-top");
    }
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark p-3"
      ref={ClassRef}
    >
      <Link to="/home" className="navbar-brand">
        Mian Website
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/account" className="nav-link">
              Account
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
