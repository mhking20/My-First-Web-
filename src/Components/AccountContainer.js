import React, { useEffect, useRef } from "react";
import "./Styles/Acount.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Get } from "./Middleware";

function AccountContainer({ Loading, NoLoading, Get }) {
  const navigate = useNavigate();

  const delete_account = async () => {
    try {
      Loading();
      const token = localStorage.getItem("token");
      const dell = await axios.delete(
        "http://localhost:3001/api/v1/user/user",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      localStorage.removeItem("token");
      navigate("/reg");
      console.log(dell);
      NoLoading();
    } catch (error) {
      navigate("/reg");
      localStorage.removeItem("token");
      console.log(error);
    }
  };
  const elRef = useRef(null);
  const el2Ref = useRef(null);

  const info = JSON.parse(localStorage.getItem("account_info"));

  useEffect(() => {
    if (localStorage.getItem("demo") === "false") {
      Get();
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
    }
    if (localStorage.getItem("theme_1") === "true") {
      el2Ref.current.classList.remove(
        "bg-dark",
        "text-light",
        "bg-info",
        "text-dark"
      );
      el2Ref.current.classList.add("bg-App", "text-App");
    }
    if (localStorage.getItem("theme_2") === "true") {
      el2Ref.current.classList.remove(
        "bg-dark",
        "text-light",
        "bg-App",
        "text-App"
      );
      el2Ref.current.classList.add("bg-info", "text-dark");
    }
  });

  if (localStorage.getItem("demo") === "false") {
    return (
      <div
        className="container-fluid  text-light d-flex justify-content-center align-items-center mt-5"
        ref={elRef}
      >
        <div
          className="pt-5 pb-5 ps-4 mb-5  account_container bg-dark text-light card"
          ref={el2Ref}
        >
          <div className="row p-4 card-body">
            <p className="col-6">Your ID</p>
            <p className="col-6 ">{info.id}</p>
          </div>
          <div className="row p-4">
            <p className="col-6">Your Name</p>
            <p className="col-6">{info.fullname}</p>
          </div>
          <div className="row p-4">
            <p className="col-6">Your Username</p>
            <p className="col-6">{info.username}</p>
          </div>
          <div className="row p-4">
            <p className="col-6">Your Email</p>
            <p className="col-6">{info.email}</p>
          </div>
          <div className="row p-4">
            <Link to="/updateaccount" className="col-6 ms-auto">
              <button className="btn btn-primary">Update</button>
            </Link>
            <Link className="col-6">
              <button
                className="btn btn-danger"
                onClick={() => delete_account()}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container-fluid text-light bg-dark d-flex justify-content-center align-items-center mt-5 account_container"
        ref={elRef}
      >
        <h3 ref={el2Ref} className="p-5">
          {" "}
          Please Login or Register To Watch Your Account{" "}
        </h3>
      </div>
    );
  }
}

const useDispatchToState = (dispatch) => {
  return {
    account_info: (_id, fullname, username, email) =>
      dispatch({
        type: "ACCOUNT_INFO",
        payload: { _id, fullname, username, email },
      }),
    Loading: () => dispatch({ type: "LOADING" }),
    NoLoading: () => dispatch({ type: "!LOADING" }),
    Info: (_id, fullname, username, email) =>
      dispatch({
        type: "ACCOUNT_INFO",
        payload: { _id, fullname, username, email },
      }),
    Get: () => Get(dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    get: state.get,
    demo: state.demo,
  };
};

export default connect(mapStateToProps, useDispatchToState)(AccountContainer);
