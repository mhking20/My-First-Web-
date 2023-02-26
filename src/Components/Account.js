import React, { useEffect } from "react";
import Nav from "./Nav";
import Foot from "./Foot";
import { Navfixed } from "./Nav";
import AccountContainer from "./AccountContainer";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account({ auth_state, auth_dispatch }) {
  const Navigate = useNavigate();
  const auth = async () => {
    try {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        const gettoken = await axios.get("https://mian-first-web.onrender.com/api/v1/auth", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (gettoken.data.auth) {
          auth_dispatch(true);
        } else if (gettoken.data.msg) {
          auth_dispatch(false);
        }
      } else {
        auth_dispatch(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  auth();

  useEffect(() => {
    if (!auth_state) {
      Navigate("/");
    }
  });
  return (
    <div className="h-100 bg-info">
      <Nav />
      <Navfixed />
      <YourAccount />
      <AccountContainer />
      <Foot />
    </div>
  );
}

function YourAccount() {
  return (
    <div className="container bg-dark text-light p-5 mt-3 mb-3">
      <h1 className="text-lg text-sm text-md align-items-center justify-content-center d-flex">
        Your Account !
      </h1>
      <p className="underline m-auto mt-4 w-50 mb-3"></p>
    </div>
  );
}

const useDispatchToProps = (dispatch) => {
  return {
    auth_dispatch: (e) => dispatch({ type: "AUTH", payload: e }),
  };
};

const useStateToProps = (state) => {
  return {
    auth_state: state.auth,
  };
};

export default connect(useStateToProps, useDispatchToProps)(Account);
