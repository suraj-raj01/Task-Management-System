import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const TaskStatus = () => {
  const [mydata, setMydata] = useState([]);
  const [isVisible, setIsvisible] = useState(true);

  const loadData = async () => {
    let api = "https://task-management-system-v9oz.onrender.com/admin/emptaskstatus";
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };
  useEffect(() => {
    loadData();
    setTimeout(() => {
      setIsvisible(false);
    }, 800);
    setIsvisible(true);
  }, []);

  const ReassignTask = async (id) => {
    let api = "https://task-management-system-v9oz.onrender.com/admin/reassigntask";
    try {
      const response = await axios.post(api, { id: id });
      message.success(response.data);
      loadData();
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };

  const deleteTask=async(taskid)=>{
    let api = "https://task-management-system-v9oz.onrender.com/admin/deletetask"
    try {
      const response = await axios.post(api,{taskid:taskid});
      message.success(response.data);
      loadData();
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  let sno = 0;
  const res = mydata.map((key) => {
    sno++;
    return (
      <>
        <div id="task-status">
          <div id="task-status-div">
          <div
            id="task-status-btn"
          >
            <span id="counter">{sno}</span>
            <span>{key.empreport === "success" ? (
              <i
                class="fas fa-circle-check"
                style={{ color: "#198754", fontSize: "27px" }}
              ></i>
            ) : (
              <i
                class="fas fa-circle-xmark"
                style={{ color: "#DC3545", fontSize: "27px" }}
              ></i>
            )}</span>
            <b>Task Status : </b>
            <Button size="sm" variant="outline-primary" disabled>
              {key.taskstatus}
            </Button>

            <Button
              size="sm"
              variant="success"
              onClick={() => {
                ReassignTask(key._id);
              }}
            >
              Re-assign Task
            </Button>
            <Button size="sm" variant="danger" onClick={()=>{deleteTask(key._id)}}>Delete Task</Button>
          </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px"
            }}
            >
            <strong>Employee Details :</strong>
            <b>Name : {key.empid.empname.toUpperCase()}</b>
            <b>Email : <span>{key.empid.empemail}</span></b>
            <b>Designation : <span>{key.empid.designation}</span></b>
          </div>

         <div 
         style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0px",
          backgroundColor:''
        }}
        >
         <div style={{height:'auto',width:"100%", display:'flex', flexDirection:'column', alignItems:'start',justifyContent:'start',backgroundColor:'whitesmoke',padding:'10px'}}>
          <strong>Task Details :</strong>
         <b>Task Title : <span>{key.tasktitle}</span></b>
          <b>Task Description : <br /> <span>{key.description}</span></b>
          </div>
          <b className="p-2" style={{color:'#DC3545'}} >Deadline Date : {key.completiondays} <span> days remaining.</span> </b>
         </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div id="display">
        {isVisible ? (
          <center style={{ color: "#1677ff", marginTop: "50px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
              alt=""
              height="60px"
            />
          </center>
        ) : (
          res
        )}
      </div>
    </>
  );
};

export default TaskStatus;
