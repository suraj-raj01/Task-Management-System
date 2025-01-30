import React, { useEffect, useState } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {message} from "antd"

const AdminDashboard = () => {
  const navigate=useNavigate();

  const[adminid,setAdminid] = useState("");
  const[adminpass,setAdminPass] = useState("");

  const loadData=()=>{
    if(localStorage.getItem("adminId")==null){
      navigate("/home");
    }else{
      setAdminid(localStorage.getItem("adminId"));
      setAdminPass(localStorage.getItem("adminPass"));
    }
  }

  useEffect(()=>{
    loadData();
  },[])


  const logOut=()=>{
    localStorage.clear();
    message.success("Logout Success !!");
    navigate("/home")
  }

  const profile=()=>{
    navigate("/admindashboard/adminprofile");
  }

  const Home=()=>{
    navigate("/home")
  }

  return (
    <>
        <h6 className='text-center p-1 fw-bold' style={{backgroundColor:'#1677ff',color:'white'}}>Admin Dashboard</h6>
        <div id='dashboard-btn'>
        <Button variant='primary' size='sm' onClick={Home}> <i class="fas fa-house"></i> Home</Button>
        <Button variant='primary' size='sm' onClick={profile}> <i class="fas fa-user"></i> Profile</Button>
        <Button variant='danger' size='sm'  onClick={logOut}><i class="fas fa-right-from-bracket"></i> Logout</Button>
        </div>
        <hr />
        <div id="hero">
            <div id="nav">
            {/* <Navbar.Brand as={Link} to="createuser" style={{backgroundColor:'red',color:'white'}}>LogOut</Navbar.Brand> */}
            <Navbar.Brand as={Link} to="createuser">Create Employee</Navbar.Brand>
            {/* <Navbar.Brand as={Link} to="assigntask">Assign Task</Navbar.Brand> */}
            <Navbar.Brand as={Link} to="displayuser">Assign Task</Navbar.Brand>
            <Navbar.Brand as={Link} to="taskstatus">Task Status</Navbar.Brand>
            <Navbar.Brand as={Link} to="deleteemployee">Update Employee</Navbar.Brand>
            </div>
            <div id="data">
                <Outlet/>
            </div>
        </div>
        <br />
    </>
  )
}

export default AdminDashboard