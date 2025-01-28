const AdminModel = require("../models/adminModel");
const transporter = require("../middlewares/nodeMailer");
const RandomPass = require("../middlewares/passwordGenerator");
const ProfilePhoto = require("../models/profilePhotoModel");
const EmployeeModel = require("../models/employeeModel");
const TaskModel = require("../models/taskModel")

require('dotenv').config();

const adminLogin = async (req, res) => {
    const { userid, password } = req.body;
    try {
        const Admin_Data = await AdminModel.findOne({ userid: userid });
        if (!Admin_Data) {
            res.status(400).json({ msg: "Invalid adminId!!" });
        }
        else if (Admin_Data.password != password) {
            res.status(400).json({ msg: "Wrong Password!!" });
        }
        else {
            res.status(200).json(Admin_Data);
        }
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!!" });
    }
}

// user Controller

const userSave = async (req, res) => {
    const { username, useremail, designation } = req.body;
    const myPassword = RandomPass();
    console.log(myPassword)

    const mailOptions = {
        from: "surajkumarbgu26@gmail.com", // Sender email
        to: useremail,           // Recipient email
        subject: "Your Company Work Detail Account",  // Email subject
        text: `Dear ${username} Your Account has been created And your password is: ${myPassword}\nYou can login using with your Email account
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(useremail);
        await EmployeeModel.create({
            empname: username,
            empemail: useremail,
            designation: designation,
            password: myPassword
        })
        res.status(200).json({ success: true, msg: "mail sent successfull!!", info });
    } catch (error) {
        res.status(400).json({ msg: "somethig went wrong!!" });
    }
}

const userLogin = async (req, res) => {
    const { userid, password } = req.body;
    try {
        const User_Data = await EmployeeModel.findOne({ empemail: userid });
        if (!User_Data) {
            res.status(400).json({ msg: "Invalid UserId!!" });
        }
        else if (User_Data.password != password) {
            res.status(400).json({ msg: "Wrong Password!!" });
        }
        else {
            res.status(200).json(User_Data);
        }
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!!" });
    }
}

const displayUser = async (req, res) => {
    try {
        const Data = await EmployeeModel.find();
        res.status(200).json(Data);
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!!" });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.body;
    try {
        const Data = await EmployeeModel.findByIdAndDelete(id);
        res.status(200).json(Data);
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!!" });
    }
}

const editEmployee = async (req, res) => {
    const { id } = req.body;
    try {
        const Data = await EmployeeModel.findById(id);
        res.status(200).json(Data);
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!" })
    }
}

const editSaveEmployee = async (req, res) => {
    const { id, username, useremail, designation, password } = req.body;
    try {
        const Data = await EmployeeModel.findByIdAndUpdate(id, {
            username: username,
            useremail: useremail,
            designation: designation,
            password: password
        })
        res.status(200).json({ msg: "employee data updated!!" });
    } catch (error) {
        res.status(400).json({ msg: "something went wrong" });
    }
}

// upload photo for profile

const uploadPhoto = async (req, res) => {
    const { photo, id } = req.body;
    const profileimg = req.file.filename;
    try {
        const Data = await ProfilePhoto.create({
            id: id,
            imgname: profileimg
        })
        const Photo = await ProfilePhoto.findOne({ id: Data.id });
        res.status(200).json(Photo);
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!!" })
    }
}

const assginTask = async (req, res) => {
    const { id, tasktitle, description, completion } = req.body;
    try {
        const Data = await TaskModel.create({
            tasktitle: tasktitle,
            description: description,
            completiondays: completion,
            empid: id
        })
        res.status(200).json("Task assign successfully!!")
    } catch (error) {
        res.status(400).json({msg:"something went wrong!!"})
    }
}

const taskStatus = async(req,res)=>{
    try {
        const Data = await TaskModel.find().populate('empid');
        res.status(200).json(Data);
    } catch (error) {
        res.status(400).json({msg:"something went wrong!!"});
    }
}

const displayUserTask = async(req,res)=>{
    const {Id} = req.body;
    try {
        const EmpData = await EmployeeModel.findOne({empemail:Id});
        const Data = await TaskModel.findOne({empid:EmpData._id});
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong!!"})
    }
}

const searchEmployee = async(req,res) =>{
    const{empname} = req.body;
    try {
        const Data = await EmployeeModel.find({"empname": { $regex: empname,$options:'i'}});
        res.status(200).json(Data);
    } catch (error) {
        res.status(400).json({msg:"something went wrong!!"})
    }
}

module.exports = {
    adminLogin,
    userSave,
    userLogin,
    displayUser,
    deleteUser,
    editEmployee,
    editSaveEmployee,
    uploadPhoto,
    assginTask,
    taskStatus,
    displayUserTask,
    searchEmployee
}