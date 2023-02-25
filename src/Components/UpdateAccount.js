import React from "react";
import './Styles/Update.css'
import Nav from "./Nav";
import Foot from "./Foot";
import {Navfixed} from "./Nav";
import {Link} from 'react-router-dom'

function UpdateAccount() {
  return (
    <div className="vh-100 bg-info">
      <Nav />
      <Navfixed />
      <Tabel />
      <Foot />
    </div>
  );
}


const Tabel = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
         <form className="bg-dark text-light p-5 update_form">
            <h1 className="text-lg text-md text-sm p-3 update_header d-flex justify-content-center align-items-center">Update Account !</h1>
            <input className="form-control mt-4" placeholder="Your Current First Name"></input>
            <input className="form-control mt-4" placeholder="Your Current Second Name"></input>
            <input className="form-control mt-4" placeholder="Enter New Password"></input>
            <div className="pt-4 d-flex justify-content-center align-items-center">
                <Link to='/account'>
                <button className="btn btn-primary">Update</button>
                </Link>
            </div>
         </form>
        </div>
    )
}

export default UpdateAccount;
