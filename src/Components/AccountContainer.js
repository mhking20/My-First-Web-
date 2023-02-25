import React from "react";
import "./Styles/Acount.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
function AccountContainer({ account_info, id, fullname, username, email }) {
  const get = async () => {

    try {
      const token = localStorage.getItem("token");
      const get = await axios.get("https://mian-first-web.onrender.com/api/v1/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const info = get.data.get;
      console.log(info);
      account_info(info._id, info.fullname, info.username, info.email);
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error);
    }
  };
  get();
  return (
    <div className="container-fluid text-light d-flex justify-content-center align-items-center mt-5">
      <div className="bg-dark pt-5 pb-5 ps-4 mb-5 account_container">
        <div className="row p-4">
          <p className="col-6">Your ID</p>
          <p className="col-6">{id}</p>
        </div>
        <div className="row p-4">
          <p className="col-6">Your Name</p>
          <p className="col-6">{fullname}</p>
        </div>
        <div className="row p-4">
          <p className="col-6">Your Username</p>
          <p className="col-6">{username}</p>
        </div>
        <div className="row p-4">
          <p className="col-6">Your Email</p>
          <p className="col-6">{email}</p>
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

const useDispatchToState = (dispatch) => {
  return {
    account_info: (_id, fullname, username, email) =>
      dispatch({
        type: "ACCOUNT_INFO",
        payload: { _id, fullname, username, email },
      }),
  };
};

const mapStateToProps = (state) => {
  return {
    id: state.Account_id,
    fullname: state.Account_fullname,
    username: state.Account_username,
    email: state.Account_email,
  };
};

export default connect(mapStateToProps, useDispatchToState)(AccountContainer);
