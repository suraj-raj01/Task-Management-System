const mongoose = require("mongoose");
const empTaskSchema = new mongoose.Schema({
    tasktitle:String,
    description:String,
    completiondays:Number,
    taskstatus:{
        type:String,
        required:true,
        default:"Not Complete",
    },
    empreport:{
        type:String,
        required:true,
        default:"pending",
    },
    empid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee'
    }
});
module.exports = mongoose.model("emptask",empTaskSchema);