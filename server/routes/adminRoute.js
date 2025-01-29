const express = require("express");
const route = express.Router();
const multer = require("multer");
const adminController = require("../controllers/adminController")

// upload profile photo using multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Save files to uploads directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+file.originalname); // Keep original file name
    }
  });
const upload = multer({ storage: storage });

route.post("/adminlogin",adminController.adminLogin);
route.post("/usersave",adminController.userSave);
route.post("/userlogin",adminController.userLogin);
route.get("/displayuser",adminController.displayUser);
route.post("/deleteuser",adminController.deleteUser);
route.post("/editdisplay",adminController.editEmployee);
route.post("/editsave",adminController.editSaveEmployee);
route.post("/uploadphoto",upload.single('photo'),adminController.uploadPhoto);
route.post("/assigntask",adminController.assginTask);
route.get("/taskstatus",adminController.taskStatus);
route.post("/displayusertask",adminController.displayUserTask);
route.post("/searchemployee",adminController.searchEmployee);

route.post("/resetpassword",adminController.resetPassword);

module.exports = route;