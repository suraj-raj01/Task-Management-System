const express = require("express");
const route = express.Router();
const multer = require("multer");
const employeeController = require("../controllers/employeeController")

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

route.post("/userlogin",employeeController.userLogin);
route.post("/uploadphoto",upload.single('photo'),employeeController.uploadPhoto);
route.post("/displayusertask",employeeController.displayUserTask);
route.post("/resetpassword",employeeController.resetPassword);
route.post("/taskstatus",employeeController.taskStatusSave);
route.post("/userauth",employeeController.userAuth);

module.exports = route;