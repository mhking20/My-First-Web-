import React from "react";
import axios from "axios";
import { connect } from "react-redux";

function Edit({ id , edit , Loading , NoLoading }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    edit(false)
    try {
        Loading()
      const value = e.target.input.value;
      console.log(value);
      const update = await axios.patch(
        `https://mian-first-web.onrender.com/api/v1/task/${id}`,
        {
         Task : value  
        }
      );
      console.log(update);
      
     await  NoLoading()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid p-3 bg-dark  d-flex text-align-center justify-content-center  vh-100">
      <div className="bg-light container p-2 d-flex text-align-center justify-content-center h-75 ">
        <form className="form-control p-3 " onSubmit={(e) => handleSubmit(e)}>
          <h1 className="d-flex text-align-center justify-content-center">
            Edit Task
          </h1>
          <p className="underline"></p>
          <div className="d-flex">
            <input
              className="form-control"
              placeholder="Enter Task..."
              name="input"
            ></input>
            <button className="btn btn-primary" type="submit">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const useStateToProps = (state) => {
  return {
    id: state.id,
  };
};

const useDispatchToProps = (dispatch) => {
    return {
        edit : (e) => dispatch({type : "EDIT" , payload : e}),
        Loading : (e) => dispatch({type : "LOADING"}),
        NoLoading : (e) => dispatch({type : "NOLOADING"})
    }
}

export default connect(useStateToProps , useDispatchToProps)(Edit);
