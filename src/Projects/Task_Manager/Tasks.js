import React from "react";
import SingleTask from "./SingleTask";
import { connect } from "react-redux";
import { alltask } from "./Middleware";
import "./Styles/SingleTask.css";

function Tasks({ loading, array }) {
  if (loading) {
    return (
      <div className=" bg-light d-flex container mt-3 text-align-center h-50 justify-content-center">
        <h1 className="d-flex text-align-center justify-content-center m-auto">
          Loading...
        </h1>
      </div>
    );
  } else if (localStorage.getItem("all_task")) {
    return (
      <div className="bg-light container p-3 mt-3 overflow-auto  max-height_taskmanager">
        {array.map((item) => {
          return <SingleTask key={item._id} task={item.Task} id={item._id} />;
        })}
      </div>
    );
  }
}

const useStateToProps = (state) => {
  return {
    loading: state.loading,
    array: state.array,
  };
};

const useDispatchToProps = (dispatch) => {
  return {
    alltask: () => alltask(dispatch),
  };
};

export default connect(useStateToProps, useDispatchToProps)(Tasks);
