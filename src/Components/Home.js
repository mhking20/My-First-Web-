import React, { useEffect, useRef } from "react";
import "./Styles/Home.css";
import Nav from "./Nav";
import { Navfixed } from "./Nav";
import Foot from "./Foot";
import Intro from "./Intro";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth, Get } from "./Middleware";

function Home({ loading, Auth, Get }) {
  const navigate = useNavigate();
  const elRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("demo") === "false") {
      Get();
      Auth();
      const sign = localStorage.getItem("auth");
      if (sign === "false") {
        navigate("/");
        const keys = ["auth", "token", "demo"];
        for (const key of keys) {
          localStorage.removeItem(key);
        }
      }
    }
    if (localStorage.getItem("theme_1") === "true") {
      elRef.current.classList.remove("bg-info", "bg-primary");
      elRef.current.classList.add("bg-App");
    }
    if (localStorage.getItem("theme_2") === "true") {
      elRef.current.classList.remove("bg-info", "bg-App");
      elRef.current.classList.add("bg-primary");
    }
  });
  if (loading) {
    return (
      <div className="container-fluid vh-100 text-align-center d-flex justify-content-center bg-light">
        <div className="w-50 h-50 m-auto text-align-center d-flex justify-content-center">
          <h1 className="text-align-center d-flex justify-content-center m-auto">
            Loading ...
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="vh-100 bg-info" ref={elRef}>
        <Nav />
        <Navfixed />
        <Intro />
        <Foot />
      </div>
    );
  }
}

const useStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const useDispatchToProps = (dispatch) => {
  return {
    Auth: () => Auth(dispatch),
    Get: () => Get(dispatch),
  };
};

export default connect(useStateToProps, useDispatchToProps)(Home);
