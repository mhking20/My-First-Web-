import React from "react";
import "./Styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid vh-100 bg-info d-flex align-items-center justify-content-center">
      <div className="login_container bg-dark p-5 shadow">
        <div className="align-items-center justify-content-center d-flex">
          <h1 className="text-light login_header">Login Please !</h1>
        </div>

        <form>
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="align-items-center justify-content-center d-flex p-3">
            <Link to="/home">
              <button type="submit" class="btn btn-primary ">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
