import React, { useEffect } from "react";
import "./Styles/Home.css";
import Nav from "./Nav";
import { Navfixed } from "./Nav";
import Foot from "./Foot";
import Intro from "./Intro";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home({ auth_state, loading}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth_state) {
      navigate("/");
      localStorage.removeItem("token");
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
      <div className="vh-100 bg-info">
        <Nav />
        <Navfixed />
        <Intro />
        <Foot />
      </div>
    );
  }
}

const useStateToProps = (state) => {
  return {
    auth_state: state.auth,
    loading: state.loading,
  };
};

export default connect(useStateToProps)(Home);
