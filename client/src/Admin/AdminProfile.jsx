import { message } from "antd";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const [admin, setAdmin] = useState("");
  const [adminid, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const loadData = () => {
    if (adminid == null) {
      navigate("/home");
    } else {
      setAdmin(localStorage.getItem("admin"));
      setAdminId(localStorage.getItem("adminId"));
      setPassword(localStorage.getItem("adminPass"));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div id="profile">
        <h1>Welcome to Admin Dashboard</h1>
        <hr />
        <div id="adminprofileimg">
          <div id="photo">
            <img
              src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
         
        </div>

        <br />
        <h5>Admin Name : {admin}</h5>
        <h5>Admin Id : {adminid}</h5>
        {/* <h5>
          Admin Password : <span id="pass">{password}</span>
        </h5> */}
      </div>
    </>
  );
};

export default AdminProfile;
