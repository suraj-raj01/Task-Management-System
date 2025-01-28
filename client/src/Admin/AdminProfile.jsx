import { message } from "antd";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const AdminProfile = () => {
  const navigate = useNavigate();
  const [myfile, setMyfile] = useState("");
  const handleFile = (e) => {
    setMyfile(e.target.files[0]);
  };

  const handleSubmit = async(id) =>{
    let formData = new FormData();
    if(myfile==""){
      message.error("please select profile photo")
    }else{
    formData.append("photo",myfile);
    formData.append("id",id);
    let api = 'http://localhost:8000/admin/uploadphoto';
    try {
      const response = await axios.post(api,formData);
      console.log(response.data);
      message.success("profile photo saved!!");
      localStorage.setItem("showImg",response.data.imgname);
      document.querySelector("#file").style.display="none";
      document.querySelector("#btnfile").style.display="none";
      document.querySelector("#remove").style.display="block";
      navigate("/admindashboard/adminprofile");
    } catch (error) {
      message.error(error);
    }
  }
  }

  const removePhoto=()=>{
        document.querySelector("#file").style.display="block";
        document.querySelector("#btnfile").style.display="block";
        document.querySelector("#remove").style.display="none";
        localStorage.removeItem("showImg");
        message.success("Profile photo removed!!")
        navigate("/admindashboard")
      }

  return (
    <>
      <div id="profile">
        <h1>Welcome to Admin Dashboard</h1>
        <hr />
        <div id="profileimg">
          <div id="photo">
          <img src={`http://localhost:8000/uploads/${localStorage.getItem("showImg")}`} alt="" height='100%' width='100%'/>
          </div>
          <Form className="d-flex">
          <input type="file" id='file' onChange={handleFile}/>
               <Button id='btnfile' size='sm' style={{width:'80px',display:'block'}} onClick={()=>{handleSubmit(Date.now())}}>Save</Button>
               <Button id='remove' variant='danger' size='sm' style={{display:'none'}} onClick={removePhoto}>Remove photo</Button>
          </Form>
        </div>
        <br />
        <h5>Admin Name : {localStorage.getItem("admin")}</h5>
        <h5>Admin Id : {localStorage.getItem("adminId")}</h5>
        <h5>
          Admin Password :{" "}
          <span id="pass">{localStorage.getItem("adminPass")}</span>
        </h5>
      </div>
    </>
  );
};

export default AdminProfile;
