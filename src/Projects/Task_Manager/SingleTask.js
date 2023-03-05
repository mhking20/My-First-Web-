import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import "./Styles/SingleTask.css";
import { alltask } from "./Middleware";

function SingleTask({ task, id, Loading, NoLoading, alltask, edit, _id }) {
  const handleDelete = async () => {
    if (localStorage.getItem("all_task")) {
      Loading();
      await axios.delete(`https://mian-first-web.onrender.com/api/v1/task/${id}`);
      alltask();
      NoLoading();
    }
  };

  const handleEdit = () => {
    _id(id);
    edit(true);
  };

  return (
    <div className="conteiner p-3 form-control d-flex shadow mt-1">
      <div className="d-flex text-align-center justify-content-center me-auto">
        <h4 className="d-flex text-align-center justify-content-center singletask_taskmanager_header">
          {task}
        </h4>
      </div>

      <div className="d-flex text-align-center justify-content-center ms-auto singletask_taskmanager_btn_container">
        <button className="btn btn-primary me-1" onClick={() => handleEdit()}>
          Edit
        </button> 
        <button className="btn btn-danger ms-1" onClick={() => handleDelete()}>
          Del
        </button>
      </div>
    </div>
  );
}

const useDispatchToProps = (dispatch) => {
  return {
    Loading: () => dispatch({ type: "LOADING" }),
    NoLoading: () => dispatch({ type: "NOLOADING" }),
    alltask: () => alltask(dispatch),
    edit: (e) => dispatch({ type: "EDIT", payload: e }),
    _id: (e) => dispatch({ type: "ID", payload: e }),
  };
};

const useStateToProps = (state) => {
  return {
    isedit: state.edit,
  };
};

export default connect(useStateToProps, useDispatchToProps)(SingleTask);
