const ProfilePhoto = require("../models/profilePhotoModel");
const EmployeeModel = require("../models/employeeModel");
const TaskModel = require("../models/taskModel");
const jwt = require('jsonwebtoken');
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
        const token = jwt.sign({ userId: User_Data._id }, process.env.SECRET_KEY, {
            expiresIn: 3*24*60*60,
        });
        res.status(200).json({token:token});
    } catch (error) {
        res.status(400).json({ msg: "something went wrong!!" });
    }
}

const userAuth = async(req,res)=>{
    const token = req.header("auth-token");
    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        const user = await EmployeeModel.findById(decoded.userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg:"Something went wrong!!!"});
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
    taskStatusSave,
    userAuth
}