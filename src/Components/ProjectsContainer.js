import React, { useEffect, useRef } from "react";
import "./Styles/Projects.css";

function ProjectsContainer() {
  const elRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("theme_1") === "true") {
      elRef.current.classList.remove(
        "bg-dark",
        "text-light",
        "bg-info",
        "text-dark"
      );
      elRef.current.classList.add("bg-App", "text-App");
    }
    if (localStorage.getItem("theme_2") === "true") {
      elRef.current.classList.remove(
        "bg-dark",
        "text-light",
        "bg-App",
        "text-App"
      );
      elRef.current.classList.add("bg-info", "text-dark");
    }
  });
  if (localStorage.getItem("demo") === "false") {
    return (
      <div
        className="container-fluid bg-dark mt-5 mb-5 p-5 text-light "
        ref={elRef}
      >
        <div className="row text-align-center justify-content-center d-flex">
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 1
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 2
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 3
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 4
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 5
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 6
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 7
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 8
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex bg-info p-5 mt-3 mb-3 ms-3 me-3">
            Project 9
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container-fluid bg-dark mt-5 mb-5 p-4 text-light text-align-center justify-content-center d-flex projects_container"
        ref={elRef}
      >
        <h3 className="pt-4 pb-4">
          Please Login or Register to access my projects
        </h3>
      </div>
    );
  }
}

export default ProjectsContainer;
