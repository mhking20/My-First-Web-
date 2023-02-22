import React from "react";
import "./Styles/Acount.css";
import { Link } from "react-router-dom";
function AccountContainer() {
  return (
    <div className="container-fluid text-light d-flex justify-content-center align-items-center mt-5">
      <div className="bg-dark pt-5 pb-5 ps-4 mb-5 account_container">
        <div className="row p-4">
          <p className="col-6">Your ID</p><p className="col-6">Your Current ID</p>
        </div>
        <div className="row p-4">
          <p className="col-6">Your First Name</p><p className="col-6">Your Current ID</p>
        </div>
        <div className="row p-4">
          <p className="col-6">Your ID</p><p className="col-6">Your Current ID</p>
        </div>
        <div className="row p-4">
          <p className="col-6">Your ID</p><p className="col-6">Your Current ID</p>
        </div>
        <div className="row p-4">
          <Link to="/updateaccount" className="col-6 ms-auto">
            <button className="btn btn-primary">Update</button>
          </Link>
          <Link className="col-6">
            <button className="btn btn-danger">Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountContainer;
