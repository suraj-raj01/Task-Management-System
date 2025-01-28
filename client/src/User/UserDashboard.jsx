import React, { useEffect, useState } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {message} from "antd"
const UserDashboard = () => {
  const navigate=useNavigate();

  const[username,setUsername] =  useState("");
  const[userid,setUserid] = useState("");
  const[password,setPassword] = useState("");
  const[designation,setDesignation] = useState("");

  const loadData=()=>{
    if(localStorage.getItem("employeeid")==null){
      navigate("/home");
    }else{
      setUsername(localStorage.getItem("employee"));
      setUserid(localStorage.getItem("employeeid"));
      setPassword(localStorage.getItem("empPass"));
      setDesignation(localStorage.getItem("designation"))
    }
  }

  useEffect(()=>{
    loadData();
  },[])

  const logOut=()=>{
    localStorage.clear();
    message.success("Logout Success!!")
    navigate("/home")
  }

  const Home=()=>{
    navigate("/home");
  }

  const Profile=()=>{
    navigate("/userdashboard/userprofile")
  }

  return (
    <>
        <h6 className='text-center p-1 fw-bold' style={{backgroundColor:'#1677ff',color:'white'}}>User Dashboard</h6>
        <div id='dashboard-btn'>
        <Button variant='primary' size='sm' onClick={Home}> <i class="fas fa-house"></i> Home</Button>
        <Button variant='primary' size='sm' onClick={Profile}><i class="fas fa-user"></i> Profile</Button>
        <Button variant='danger' size='sm' onClick={logOut}><i class="fas fa-right-from-bracket"></i> LogOut</Button>
        </div>
        <hr />
        <div id="hero">
            <div id="nav">
            {/* <Navbar.Brand as={Link} to="createuser" style={{backgroundColor:'red',color:'white'}}>LogOut</Navbar.Brand> */}
            {/* <Navbar.Brand as={Link} to="userprofile">Your Profile</Navbar.Brand> */}
            <Navbar.Brand as={Link} to="usertask">Your Tasks</Navbar.Brand>
            <Navbar.Brand as={Link} to="resetpassword">Reset Password</Navbar.Brand>
            </div>
            <div id="data">
                <Outlet/>
            </div>
        </div>
        <br />
    </>
  )
}

export default UserDashboard