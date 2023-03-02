import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import Foot from "./Foot";
import { Navfixed } from "./Nav";
import AccountContainer from "./AccountContainer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth, Get } from "./Middleware";

function Account({ loading, Auth, Get }) {

  const Navigate = useNavigate();
  const elRef = useRef(null);
  
  if(localStorage.getItem("demo") === "false"){
    Get();
    
  }

  useEffect(() => {
    if (localStorage.getItem("demo") === "false") {
      Get();
      Auth();
      if (localStorage.getItem("auth") === "false") {
        Navigate("/");
        const keys = ["auth", "token", "demo"];
        for (const key of keys) {
          localStorage.removeItem(key);
        }
      }
    }
    if (localStorage.getItem("demo") === "true") {
      elRef.current.classList.remove("h-100");
      elRef.current.classList.add("vh-100");
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
      <div className="container-fluid vh-100 text-align-center d-flex justify-content-center bg-light" ref={elRef}>
        <div className="w-50 h-50 m-auto text-align-center d-flex justify-content-center">
          <h1 className="text-align-center d-flex justify-content-center m-auto">
            Loading ...
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-100 bg-info" ref={elRef}>
        <Nav />
        <Navfixed />
        <YourAccount />
        <AccountContainer />
        <Foot />2
      </div>
    );
  }
}

function YourAccount() {
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
    <div className="container bg-dark text-light p-5 mt-3 mb-3" ref={elRef}>
      <h1 className="text-lg text-sm text-md align-items-center justify-content-center d-flex">
        Your Account !
      </h1>
      <p className="underline m-auto mt-4 w-50 mb-3"></p>
    </div>
  );
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

export default connect(useStateToProps, useDispatchToProps)(Account);
