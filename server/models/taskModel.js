const mongoose = require("mongoose");
const empTaskSchema = new mongoose.Schema({
    tasktitle:String,
    description:String,
    completiondays:Number,
    empid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee'
    }
});
module.exports = mongoose.model("emptask",empTaskSchema);