import React from "react";
import Nav from "./Nav";
import Foot from "./Foot";
import {Navfixed} from "./Nav";
import AccountContainer from "./AccountContainer";
function Account() {
  return (
    <div className="h-100 bg-info">
      <Nav />
      <Navfixed />
      <YourAccount />
      <AccountContainer />
      <Foot />
    </div>
  );
}

function YourAccount() {
  return (
    <div className="container bg-dark text-light p-5 mt-3 mb-3">
      <h1 className="text-lg text-sm text-md align-items-center justify-content-center d-flex">
        Your Account !
      </h1>
      <p className="underline m-auto mt-4 w-50 mb-3"></p>
    </div>
  );
}

export default Account;
