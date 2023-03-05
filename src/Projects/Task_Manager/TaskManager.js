import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Tasks from "./Tasks";
import axios from "axios";
import { alltask } from "./Middleware";
import Edit from "./Edit";

function TaskManager({ Loading, NoLoading, alltask, array, loading, isedit }) {
  const clearbtnRef = useRef();
  const handleclearall = async () => {
    try {
      Loading();
      const clearall = await axios.delete("https://mian-first-web.onrender.com/api/v1/task");
      console.log(clearall);
      alltask();
      NoLoading();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (clearbtnRef.current) {
      if (array.length < 1) {
        clearbtnRef.current.classList.add("collapse");
      } else if (loading) {
        clearbtnRef.current.classList.remove("collapse");
      }
    }
  });

  const ClearBtn = () => {
    alltask();
    if (localStorage.getItem("all_task")) {
      if (JSON.parse(localStorage.getItem("all_task")).length > 0) {
        return (
          <div className="d-flex container text-align-center justify-content-center bg-light m-auto">
            <button
              className="btn btn-danger mb-4"
              onClick={() => handleclearall()}
              ref={clearbtnRef}
            >
              Clear All
            </button>
          </div>
        );
      }
    }
  };

  if (isedit) {
    return <Edit />;
  } else {
    return (
      <div className="container-fluid p-3 bg-dark  vh-100">
        <Form />
        <Tasks />
        <ClearBtn />
      </div>
    );
  }
}

const useDispatchToProps = (dispatch) => {
  return {
    Loading: () => dispatch({ type: "LOADING" }),
    NoLoading: () => dispatch({ type: "NOLOADING" }),
    alltask: () => alltask(dispatch),
  };
};

const useStateToProps = (state) => {
  return {
    array: state.array,
    loading: state.loading,
    isedit: state.edit,
  };
};

export default connect(useStateToProps, useDispatchToProps)(TaskManager);
