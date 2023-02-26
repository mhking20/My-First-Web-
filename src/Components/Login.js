import React, { useRef } from "react";
import "./Styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const alertRef = useRef();
  const handelsubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      const post = await axios.get("https://mian-first-web.onrender.com/api/v1/login", {
        params: {
          data: {
            username,
            password,
          },
        },
      });
     
      const alert_default = () => {
        setTimeout(() => {
          alertRef.current.classList.add("collapse");
        }, 3000);
      };
      if (post.data.msg) {
        return (
          alertRef.current.classList.remove("collapse"),
          alertRef.current.classList.add("bg-danger", "text-light"),
          (alertRef.current.textContent = post.data.msg),
          alert_default(),
          (e.target.username.value = ""),
          (e.target.password.value = "")
        );
      }
      
      if(post.data.token){
        const token = post.data.token
        localStorage.setItem('token' , token )
        navigate("/home")
      }
      
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error);
    }
  };

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

export default Login;
