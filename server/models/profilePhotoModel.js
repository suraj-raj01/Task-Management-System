const mongoose = require("mongoose");
const profilePhotoSchema = new mongoose.Schema({
    id:Number,
    imgname:String
});

module.exports = mongoose.model("profilePhoto",profilePhotoSchema);