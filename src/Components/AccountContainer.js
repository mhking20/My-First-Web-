import React from "react";
import { Link } from "react-router-dom";
function AccountContainer() {
  return (
    <div className="container-fluid bg-dark d-flex justify-content-center align-items-center p-5">
      <tabel className="bg-info p-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your ID</td>
            <td>Your Name</td>
            <td>Your Email</td>
            <td>
              <Link to='/updateaccount'>
                {" "}
                <button className="btn-primary btn">Update Account</button>
              </Link>
            </td>
            <td>
              <Link to='/deleteaccount'>
                <button className="btn-danger btn">Delete Account</button>
              </Link>{" "}
            </td>
          </tr>
        </tbody>
      </tabel>
    </div>
  );
}

export default AccountContainer;
