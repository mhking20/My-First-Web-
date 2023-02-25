import React, { useRef } from "react";
import "./Styles/Reg.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Reg({ login_form }) {
  const alertRef = useRef();
  const navigate = useNavigate();
  const handelsubmit = (e) => {
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

    const post = async () => {
      const post = await axios.post("https://mian-first-web.onrender.com/api/v1", {
        fullname,
        username,
        email,
        password,
      });
      localStorage.setItem("token" , post.data.token)
      return post;
    };

    post();

    login_form({ fullname, username, email, password, confirmpassword });
    navigate("/home");
  };
  return (
    <div className="container_fluid vh-100 bg-info d-flex align-items-center justify-content-center">
      <div className="reg_container bg-dark p-5">
        <div className="d-flex align-items-center justify-content-center text-light">
          <h1 className="reg_header">Register Yourself !</h1>
        </div>
        <p className="alert collapse" ref={alertRef}>
          asdasd
        </p>
        <form onSubmit={(e) => handelsubmit(e)} action="/home">
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

const mapDispatchToProps = (dispatch) => {
  return {
    login_form: (fullname, username, email, password, confirmpassword) =>
      dispatch({
        type: "REG_FORM",
        payload: { fullname, username, email, password, confirmpassword },
      }),
  };
};

export default connect(null, mapDispatchToProps)(Reg);
