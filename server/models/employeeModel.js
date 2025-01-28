const mongoose = require("mongoose");
const employeeSchema  = new mongoose.Schema({
    empname:String,
    empemail:String,
    designation:String,
    password:String
});

module.exports = mongoose.model("employee",employeeSchema);