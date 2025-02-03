const express = require("express");
const route = express.Router();
const adminController = require("../controllers/adminController")


route.post("/adminlogin",adminController.adminLogin);
route.post("/usersave",adminController.userSave);
route.get("/displayuser",adminController.displayUser);
route.post("/deleteuser",adminController.deleteUser);
route.post("/editdisplay",adminController.editEmployee);
route.post("/editsave",adminController.editSaveEmployee);
route.post("/assigntask",adminController.assginTask);
route.get("/emptaskstatus",adminController.taskStatus);
route.post("/searchemployee",adminController.searchEmployee);
route.post("/reassigntask",adminController.reAssignTask);
route.post("/deletetask",adminController.deleteTask);

module.exports = route;