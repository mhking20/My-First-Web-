import React from "react";
import "./Styles/Reg.css";
import { Link } from "react-router-dom";

function Reg() {
  return (
    <div className="container_fluid vh-100 bg-info d-flex align-items-center justify-content-center">
      <div className="reg_container bg-dark p-5">
        <div className="d-flex align-items-center justify-content-center text-light">
          <h1 className="reg_header">Register Yourself !</h1>
        </div>
        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="first-name" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="first-name"
                placeholder="Enter first name"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="last-name" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="last-name"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
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
          <div class="mb-3">
            <label for="confirm-password" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="confirm-password"
              placeholder="Confirm password"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Link to="/home">
              <button type="submit" class="btn btn-danger m-3">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reg;
