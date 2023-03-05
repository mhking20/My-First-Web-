import React, { useRef } from "react";
import "./Styles/Reg.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Auth } from "./Middleware";

function Reg({ login_form, Loading, NoLoading, loading }) {
  const alertRef = useRef();
  const navigate = useNavigate();
  Auth();
  const handelsubmit = async (e) => {
    e.preventDefault();

    const fullname = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    const alert_default = () => {
      setTimeout(() => {
        alertRef.current.classList.add("collapse");
      }, 2000);
    };

    if (password !== confirmpassword) {
      return (
        alertRef.current.classList.remove("collapse"),
        alertRef.current.classList.add("bg-danger", "text-light"),
        (alertRef.current.textContent = "Your Password Does Not Matched"),
        alert_default()
      );
    }

    try {
      Loading();
      const data = await axios.get("https://mian-first-web.onrender.com/api/v1/user/reg", {
        params: {
          data: { email, username },
        },
      });
      if (data.data.msg) {
       await  NoLoading();
        alertRef.current.classList.remove("collapse");
        alertRef.current.classList.add("bg-danger", "text-light");
        alertRef.current.textContent = data.data.msg;
        alert_default();
      }
      const post = await axios.post("https://mian-first-web.onrender.com/api/v1/user", {
        fullname,
        username,
        email,
        password,
      });
      console.log(post);
      localStorage.setItem("token", post.data.token);
      localStorage.setItem("demo", false);
      login_form({ fullname, username, email, password, confirmpassword });
      navigate("/home");
      NoLoading();
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
      <div className="container_fluid vh-100 bg-info d-flex align-items-center justify-content-center">
        <div className="reg_container bg-dark p-5">
          <div className="d-flex align-items-center justify-content-center text-light">
            <h1 className="reg_header">Register Yourself !</h1>
          </div>
          <p className="alert collapse" ref={alertRef}></p>
          <form onSubmit={(e) => handelsubmit(e)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>Name
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeholder="Enter Name"
                  name="name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeholder="Enter Username"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
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
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm password"
                name="confirmpassword"
                required
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-danger mt-3">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login_form: (fullname, username, email, password, confirmpassword) =>
      dispatch({
        type: "REG_FORM",
        payload: { fullname, username, email, password, confirmpassword },
      }),
    Loading: () => dispatch({ type: "LOADING" }),
    NoLoading: () => dispatch({ type: "!LOADING" }),
    demo: (e) => dispatch({ type: "DEMO", payload: e }),
  };
};

const useStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(useStateToProps, mapDispatchToProps)(Reg);
