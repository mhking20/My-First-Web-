import React, { useEffect } from "react";
import "./Styles/Home.css";
import Nav from "./Nav";
import { Navfixed } from "./Nav";
import Foot from "./Foot";
import Intro from "./Intro";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home({ auth_state, auth_dispatch }) {
  const navigate = useNavigate();

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
      navigate("/");
      localStorage.removeItem("token");
    }
  });

  return (
    <div className="vh-100 bg-info">
      <Nav />
      <Navfixed />
      <Intro />
      <Foot />
    </div>
  );
}

const useStateToProps = (state) => {
  return {
    auth_state: state.auth,
  };
};

const useDispatchToProps = (dispatch) => {
  return {
    auth_dispatch: (e) => dispatch({ type: "AUTH", payload: e }),
  };
};

export default connect(useStateToProps, useDispatchToProps)(Home);
