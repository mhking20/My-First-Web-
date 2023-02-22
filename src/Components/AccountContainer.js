import React from "react";
import './Styles/Acount.css'
import { Link } from "react-router-dom";
function AccountContainer() {
  return (
    <div className="container-fluid text-light d-flex justify-content-center align-items-center p-5 account_container">
      <div className="mb-5 p-5 bg-dark">
        <div>
          <h1>Your ID</h1>
          <h4>Your Current ID</h4>
        </div>
        <div>
          <h1>Your ID</h1>
          <h4>Your Current ID</h4>
        </div>
        <div>
          <h1>Your ID</h1>
          <h4>Your Current ID</h4>
        </div>
        <div>
          <h1>Your ID</h1>
          <h4>Your Current ID</h4>
        </div>
        <div>
          <Link>
            <button className="btn btn-primary">Update</button>
          </Link>
          <Link>
            <button className="btn btn-danger">Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountContainer;
