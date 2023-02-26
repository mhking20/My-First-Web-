import React, { useEffect } from "react";
import "./Styles/Projects.css";
import Nav from "./Nav";
import Foot from "./Foot";
import { Navfixed } from "./Nav";
import ProjectsContainer from "./ProjectsContainer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Projects({ auth_state, auth_dispatch }) {
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
    <div className="bg-info h-100">
      <Nav />
      <Navfixed />
      <ProjectsIntro />
      <ProjectsContainer />
      <Foot />
    </div>
  );
}

const ProjectsIntro = () => {
  return (
    <div className="container bg-dark  align-items-center justify-content-center text-light mt-3 mb-3 p-5">
      <h1 className=" align-items-center  justify-content-center d-flex text-lg text-md text-sm">
        My Projects
      </h1>
      <p className="underline m-auto mt-4 w-50"></p>
    </div>
  );
};

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

export default connect(useStateToProps, useDispatchToProps)(Projects);
