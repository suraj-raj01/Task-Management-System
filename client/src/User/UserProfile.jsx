import React from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState,useEffect } from 'react'
import axios from 'axios'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
    const navigate = useNavigate();
    const[username,setUsername] =  useState("");
    const[userid,setUserid] = useState("");
    const[empid,setEmpId] = useState("");
    const[password,setPassword] = useState("");
    const[designation,setDesignation] = useState("");
  
    const loadData=()=>{
      if(userid==null){
        navigate("/home");
      }else{
        setUsername(localStorage.getItem("employee"));
        setUserid(localStorage.getItem("employeeid"));
        setEmpId(localStorage.getItem("empid"));
        setPassword(localStorage.getItem("empPass"));
        setDesignation(localStorage.getItem("designation"));
      }
    }
  
    useEffect(()=>{
      loadData();
    },[])

    const[myfile,setMyfile]=useState("");

    const handleFile=(e)=>{
      setMyfile(e.target.files[0]);
    }


    const handleSubmit = async(id) =>{
      let formData = new FormData();
      if(myfile==""){
        message.error("please select profile photo")
        return false;
      }else{
      formData.append("photo",myfile);
      formData.append("id",id);
      formData.append("empid",empid);
      let api = 'http://localhost:8000/employee/uploadphoto';
      try {
        const response = await axios.post(api,formData);
        message.success("profile photo saved!!");
        localStorage.setItem("showphoto",response.data.imgname);
        document.querySelector("#file").style.display="none";
        document.querySelector("#btnfile").style.display="none";
        document.querySelector("#remove").style.display="block";
        navigate("/userdashboard/userprofile")
      } catch (error) {
        message.error(error.response.data.msg);
      }
    }
    }

    const removePhoto=()=>{
      document.querySelector("#file").style.display="block";
      document.querySelector("#btnfile").style.display="block";
      document.querySelector("#remove").style.display="none";
      localStorage.removeItem("showphoto");
      message.success("Profile photo removed!!")
      navigate("/userdashboard")
    }

  return (
    <>
        <div id="profile">
            <h1>Welcome back <span style={{textTransform:'uppercase',color:'#1677ff',fontWeight:'600'}}>{localStorage.getItem("employee")}</span></h1>
            <hr />
            <div id="profileimg">
                <div id="photo">
                <img src={`http://localhost:8000/uploads/${localStorage.getItem("showphoto")}`} alt="" height='100%' width='100%'/>
                </div>
               <Form className='d-flex'>
               <input type="file" id='file' onChange={handleFile}/>
               <Button id='btnfile' size='sm' style={{width:'80px',display:'block'}} onClick={()=>{handleSubmit(Date.now())}}>Save</Button>
               <Button id='remove' variant='danger' size='sm' style={{display:'none'}} onClick={removePhoto}>Remove photo</Button>
               </Form>
            </div>
            <br />
            <h5>Employee Name : {username.toUpperCase()}</h5>
            <h5>EmployeeId : {userid}</h5>
            <h5>Designation : {designation}</h5>
            {/* <h5>Password : <span id='pass'>{password}</span></h5> */}
            
            
        </div>
    </>
  )
}

export default UserProfile