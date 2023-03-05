import React, { useEffect, useRef } from "react";
import "./Styles/Update.css";
import Nav from "./Nav";
import Foot from "./Foot";
import { Navfixed } from "./Nav";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Auth, Get } from "./Middleware";

function UpdateAccount({ Loading, NoLoading, loading, Auth, Get }) {
  const elRef = useRef(null);
  useEffect(() => {
    Get();
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
  if (loading) {
    return (
      <div
        className="container-fluid vh-100 text-align-center d-flex justify-content-center bg-light"
        ref={elRef}
      >
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
        <Tabel Loading={Loading} NoLoading={NoLoading} Auth={Auth} Get={Get} />
        <Foot />
      </div>
    );
  }
}

const Tabel = ({ Loading, NoLoading, Auth, Get }) => {
  const navigate = useNavigate();
  const Navigate = useNavigate();
  const elRef = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("demo") === "false") {
      Get();
      Auth();
      if (localStorage.getItem("auth") === "false") {
        Navigate("/");
        const keys = ["token", "auth"];
        for (const key of keys) {
          localStorage.removeItem(key);
        }
      }
    }
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

  const info = JSON.parse(localStorage.getItem("account_info"));
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      Loading();
      if (localStorage.getItem("demo") === "false") {
        const token = localStorage.getItem("token");
        let fullname = e.target.fullname.value;
        let username = e.target.username.value;
        let email = e.target.email.value;
        if (fullname === "") {
          fullname = info.fullname;
        }
        if (username === "") {
          username = info.username;
        }
        if (email === "") {
          email = info.email;
        }
        await axios.patch(
          "https://mian-first-web.onrender.com/api/v1/user/user",
          { fullname, username, email },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        await Get()
        navigate("/account");
        NoLoading();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <form
        className="bg-dark text-light p-5 update_form"
        onSubmit={(e) => handelSubmit(e)}
        ref={elRef}
      >
        <h1 className="text-lg text-md text-sm p-3 update_header d-flex justify-content-center align-items-center">
          Update Account !
        </h1>
        <input
          className="form-control mt-4"
          name="fullname"
          type="text"
          placeholder={info.fullname}
        ></input>
        <input
          className="form-control mt-4"
          placeholder={info.username}
          name="username"
          type="text"
        ></input>
        <input
          className="form-control mt-4"
          placeholder={info.email}
          name="email"
          type="email"
        ></input>
        <div className="pt-4 d-flex justify-content-center align-items-center">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

const useStateToProps = (state) => {
  return {
    auth_state: state.auth,
    loading: state.loading,
  };
};

const useDispatchToState = (dispatch) => {
  return {
    account_info: (_id, fullname, username, email) =>
      dispatch({
        type: "ACCOUNT_INFO",
        payload: { _id, fullname, username, email },
      }),
    Loading: () => dispatch({ type: "LOADING" }),
    NoLoading: () => dispatch({ type: "!LOADING" }),
    Auth: () => Auth(dispatch),
    Get: () => Get(dispatch),
  };
};

export default connect(useStateToProps, useDispatchToState)(UpdateAccount);
