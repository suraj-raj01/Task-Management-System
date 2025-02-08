import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message, Empty } from "antd";

const PendingTask = () => {

  const navigate = useNavigate();
  const [mydata, setMydata] = useState([]);
  const [taskstatus, setTaskstatus] = useState("");
  const [isVisible, setIsvisible] = useState("");

  const empid = localStorage.getItem("empid");

  const loadData = async () => {
    let api = "https://task-management-system-v9oz.onrender.com/employee/displayusertask";
    try {
      const response = await axios.post(api, { Id: empid });
      setMydata(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    loadData();
    setTimeout(()=>{
      setIsvisible(false);
    },1000);
    setIsvisible(true);
  }, []);

  const handleSubmit = async (id) => {
    let api = "https://task-management-system-v9oz.onrender.com/employee/taskstatus";
    try {
      const response = await axios.post(api, {
        taskstatus: taskstatus,
        id: id,
      });
      message.success(response.data);
      loadData();
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };

  let count=0;
  const res = mydata.map((key) => {
      if(key.taskstatus==="Partially Completed"){
        count++;
      return (
        <>
          <div id="usertask" style={{ height: "320px", width: "500px" }}>
            <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
            <span>{count}</span>
            <Button disabled variant="warning" size="sm">{<i class="far fa-circle-check"></i>}{" "}{key.taskstatus}</Button>
            </div>
            <h1></h1>
            <b>Task Title </b>
            <p>{key.tasktitle}</p>
            <b>Task Description</b>
            <p>{key.description}</p>
            <b>Completion Days</b>
            <p>
              {key.completiondays}
              {" Days remainig"}
            </p>
  
            <div style={{ display: "flex", gap: "10px", width: "70%" }}>
              <Form.Select
                size="sm"
                name="taskstatus"
                value={taskstatus}
                onChange={(e) => setTaskstatus(e.target.value)}
              >
                <option selected value="">
                  Select Task Status
                </option>
                <option value="Fully Completed">Fully Complete</option>
                <option value="Partially Completed">Partial Complete</option>
                <option value="Not Completed">Not Complete</option>
              </Form.Select>
              {key.empreport === "success" ? (
                <Button size="sm" disabled>
                  Completed
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => {
                    handleSubmit(key._id);
                  }}
                >
                  Submit
                </Button>
              )}
            </div>
            <h3></h3>
          </div>
        </>
      );
    }
  });

  return (
    <div>
        <div id="usertasklyt" style={{overflowY:'scroll', height:'60vh'}}>
          {isVisible?(
            <center style={{color:'#1677ff',marginTop:'150px'}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" height='60px'/>
           </center>
          ):(
            res
          )}
        </div>
    </div>
  )
}

export default PendingTask