import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { alltask } from "./Middleware";

function Form({ Loading, NoLoading, alltask }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Loading();
      const value = e.target.input.value;
      console.log(value);
      const info = JSON.parse(localStorage.getItem("account_info"));
      const post = await axios.post("https://mian-first-web.onrender.com/api/v1/task", {
        User: info.username,
        Task: value,
      });
      console.log(post);
      alltask();
      NoLoading();
      e.target.input.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-light container p-2 mt-2 d-flex text-align-center justify-content-center ">
      <form className="form-control p-2" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="d-flex text-align-center justify-content-center">
          Task Manager
        </h1>
        <p className="underline"></p>
        <div className="d-flex">
          <input
            className="form-control"
            placeholder="Enter Task..."
            name="input"
          ></input>
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

const useDispatchToProps = (dispatch) => {
  return {
    Loading: () => dispatch({ type: "LOADING" }),
    NoLoading: () => dispatch({ type: "NOLOADING" }),
    alltask: () => alltask(dispatch),
  };
};

export default connect(null, useDispatchToProps)(Form);
