import React, { useRef } from "react";
import "./Styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { Auth } from "./Middleware";

function Login({ Loading, NoLoading, loading }) {
  const navigate = useNavigate();
  const alertRef = useRef();
  Auth();
  const handelsubmit = async (e) => {
    e.preventDefault();
    Loading();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      const post = await axios.get(
        "https://mian-first-web.onrender.com/api/v1/user/login",
        {
          params: {
            data: {
              username,
              password,
            },
          },
        }
      );
      const alert_default = () => {
        setTimeout(() => {
          alertRef.current.classList.add("collapse");
        }, 3000);
      };
      if (post.data.msg) {
        return (
           NoLoading(),
          alertRef.current.classList.remove("collapse"),
          alertRef.current.classList.add("bg-danger", "text-light"),
          (alertRef.current.textContent = post.data.msg),
          alert_default(),
          (e.target.username.value = ""),
          (e.target.password.value = "")
        );
      } else if (post.data.token) {
         NoLoading();
        const token = post.data.token;
        localStorage.setItem("token", token);
        navigate("/home");
        localStorage.setItem("demo", false);
      }
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error);
    }
  };
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
      <div className="container-fluid vh-100 bg-info d-flex align-items-center justify-content-center">
        <div className="login_container bg-dark p-5 shadow">
          <div className="align-items-center justify-content-center d-flex">
            <h1 className="text-light login_header">Login Please !</h1>
          </div>
          <form onSubmit={(e) => handelsubmit(e)}>
            <p className="alert collapse" ref={alertRef}></p>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                name="username"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="password"
                required
              />
            </div>
            <div className="align-items-center justify-content-center d-flex p-3">
              <button type="submit" className="btn btn-primary ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const useDispatchToProps = (dispatch) => {
  return {
    Loading: () => dispatch({ type: "LOADING" }),
    NoLoading: () => dispatch({ type: "!LOADING" }),
  };
};

const useStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(useStateToProps, useDispatchToProps)(Login);
