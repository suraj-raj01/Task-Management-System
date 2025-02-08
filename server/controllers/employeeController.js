const ProfilePhoto = require("../models/profilePhotoModel");
const EmployeeModel = require("../models/employeeModel");
const TaskModel = require("../models/taskModel");
require('dotenv').config();

const userLogin = async (req, res) => {
    const { userid, password } = req.body;
    try {
        const User_Data = await EmployeeModel.findOne({ empemail: userid });
        if (!User_Data) {
            res.status(400).json({ msg: "Invalid UserId!!" });
        }
        if (User_Data.password != password) {
            res.status(400).json({ msg: "Wrong Password!!" });
        }
        res.status(200).json(User_Data);
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!!" });
    }
}

// upload photo for profile
const uploadPhoto = async (req, res) => {
    const {id} = req.body;
    const profileimg = req.file.filename;
    try {
        const Data = await ProfilePhoto.create({
            id:id,
            imgname: profileimg
        })
        const Photo = await ProfilePhoto.findOne({ id: Data.id });
        res.status(200).json(Photo);
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!!" })
    }
}

const displayUserTask = async(req,res)=>{
    const {Id} = req.body;
    try {
        const Data = await TaskModel.find({empid:Id});
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong!!"})
    }
}

const resetPassword = async(req,res)=>{
    const {useremail,oldpassword,newpassword} = req.body;
    try {
        const Data = await EmployeeModel.findOne({empemail:useremail});
        if(Data.password!=oldpassword){
            res.status(400).json("Please enter correct password!!");
        }
        await EmployeeModel.findByIdAndUpdate(Data._id,{
            password:newpassword
        });
        res.status(200).json("Password updated !!!")
    } catch (error) {
        res.status(400).json("something went wrong!!")
    }
}

const taskStatusSave = async(req,res)=>{
    const {taskstatus, id} = req.body;
    try {
        const Data = await TaskModel.findByIdAndUpdate(id,{
            taskstatus:taskstatus,
            empreport: "success"
        })
        res.status(200).json("Your Task submitted successfully!!")
    }catch(error){
        res.status(400).json({msg:"something went wrong!!"})
    }
}

module.exports = {
    userLogin,
    uploadPhoto,
    displayUserTask,
    resetPassword,
    taskStatusSave
}