import React, { useEffect } from "react";
import Nav from "./Nav";
import Foot from "./Foot";
import { Navfixed } from "./Nav";
import AccountContainer from "./AccountContainer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Account({ auth_state, loading }) {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!auth_state) {
      Navigate("/");
    }
  });
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
      <div className="h-100 bg-info">
        <Nav />
        <Navfixed />
        <YourAccount />
        <AccountContainer />
        <Foot />
      </div>
    );
  }
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

const useStateToProps = (state) => {
  return {
    auth_state: state.auth,
    loading: state.loading,
  };
};

export default connect(useStateToProps)(Account);
