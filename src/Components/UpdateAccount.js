import React, { useEffect } from "react";
import "./Styles/Update.css";
import Nav from "./Nav";
import Foot from "./Foot";
import { Navfixed } from "./Nav";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateAccount({
  current_fullname,
  current_username,
  current_email,
  auth_state,
  Loading,
  NoLoading,
  loading,
}) {
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
      <div className="vh-100 bg-info">
        <Nav />
        <Navfixed />
        <Tabel
          current_fullname={current_fullname}
          current_username={current_username}
          current_email={current_email}
          auth_state={auth_state}
          Loading={Loading}
          NoLoading={NoLoading}
        />
        <Foot />
      </div>
    );
  }
}

const Tabel = ({
  current_fullname,
  current_username,
  current_email,
  auth_state,
  Loading,
  NoLoading,
}) => {
  const navigate = useNavigate();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!auth_state) {
      Navigate("/");
    }
  });
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      Loading();
      const token = localStorage.getItem("token");
      let fullname = e.target.fullname.value;
      let username = e.target.username.value;
      let email = e.target.email.value;
      if (fullname === "") {
        fullname = current_fullname;
      }
      if (username === "") {
        username = current_username;
      }
      if (email === "") {
        email = current_email;
      }
      const update = await axios.patch(
        "https://mian-first-web.onrender.com/api/v1/user",
        { fullname, username, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(update);
      navigate("/account");
      NoLoading();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <form
        className="bg-dark text-light p-5 update_form"
        onSubmit={(e) => handelSubmit(e)}
      >
        <h1 className="text-lg text-md text-sm p-3 update_header d-flex justify-content-center align-items-center">
          Update Account !
        </h1>
        <input
          className="form-control mt-4"
          name="fullname"
          type="text"
          placeholder={current_fullname}
        ></input>
        <input
          className="form-control mt-4"
          placeholder={current_username}
          name="username"
          type="text"
        ></input>
        <input
          className="form-control mt-4"
          placeholder={current_email}
          name="email"
          type="email"
        ></input>
        <div className="pt-4 d-flex justify-content-center align-items-center">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

const useStateToProps = (state) => {
  return {
    current_fullname: state.Account_fullname,
    current_username: state.Account_username,
    current_email: state.Account_email,
    auth_state: state.auth,
    loading: state.loading,
  };
};

const useDispatchToState = (dispatch) => {
  return {
    account_info: (_id, fullname, username, email) =>
      dispatch({
        type: "ACCOUNT_INFO",
        payload: { _id, fullname, username, email },
      }),
    Loading: () => dispatch({ type: "LOADING" }),
    NoLoading: () => dispatch({ type: "!LOADING" }),
  };
};

export default connect(useStateToProps, useDispatchToState)(UpdateAccount);
