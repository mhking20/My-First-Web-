import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Styles/Nav.css";

function handleTheme_1() {
  const keys = ["theme_2", "default_theme"];
  for (const key of keys) {
    localStorage.removeItem(key);
  }
  localStorage.setItem("theme_1", true);
  window.location.reload()
}

function handleTheme_2() {
  const keys = ["theme_1", "default_theme"];
  for (const key of keys) {
    localStorage.removeItem(key);
  }
  localStorage.setItem("theme_2", true);
  window.location.reload()
}

function handledefault_theme() {
  const keys = ["theme_2", "theme_1"];
  for (const key of keys) {
    localStorage.removeItem(key);
  }
  localStorage.setItem("default_theme", true);
  window.location.reload()
}

function Nav() {
  const removetoken = async () => {
    const keys = ["token", "auth", "demo"];
    for (const key of keys) {
      localStorage.removeItem(key);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg  p-3 navbar-dark bg-dark`}>
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
          <li className="nav-item dropdown d-flex">
            <div
              className="nav-link dropdown-toggle btn"
              id="themes-toggler"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Themes
            </div>
            <div
              aria-describedby="themes-toggler"
              className="dropdown-menu bg-dark"
            >
              <p
                className="dropdown-item  bg-dark text-light btn"
                onClick={() => handleTheme_1()}
              >
                Theme 1
              </p>
              <p
                className="dropdown-item  bg-dark text-light btn"
                onClick={() => handleTheme_2()}
              >
                Theme 2
              </p>
              <p
                className="dropdown-item  bg-dark text-light btn"
                onClick={() => handledefault_theme()}
              >
                Default Theme
              </p>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => removetoken()}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
function Navfixed() {
  const [height, setheight] = useState(0);
  const classRef = useRef();

  const removetoken = async () => {
    const keys = ["token", "auth", "demo"];
    for (const key of keys) {
      localStorage.removeItem(key);
    }
  };

  const handlescroll = () => {
    setheight(window.scrollY);
  };
  window.addEventListener("scroll", handlescroll);
  useEffect(() => {
    if (height > 100) {
      classRef.current.classList.remove("collapse");
    } else {
      classRef.current.classList.add("collapse");
    }
  });

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark p-3 collapse fixed-top`}
      ref={classRef}
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
          <li className="nav-item dropdown d-flex">
            <div
              className="nav-link dropdown-toggle btn"
              id="themes-toggler"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Themes
            </div>
            <div
              aria-describedby="themes-toggler"
              className="dropdown-menu bg-dark"
            >
              <p
                className="dropdown-item  bg-dark text-light btn"
                onClick={() => handleTheme_1()}
              >
                Theme 1
              </p>
              <p
                className="dropdown-item  bg-dark text-light btn"
                onClick={() => handleTheme_2()}
              >
                Theme 2
              </p>
              <p
                className="dropdown-item  bg-dark text-light btn"
                onClick={() => handledefault_theme()}
              >
                Default Theme
              </p>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => removetoken()}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default connect()(Nav);
export { Navfixed };
