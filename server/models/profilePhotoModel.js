const mongoose = require("mongoose");
const profilePhotoSchema = new mongoose.Schema({
    id: Number,
    imgname: {
        type: String,
        default: "173832381325516893.jpg"
    },
    empid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee'
    }
});

module.exports = mongoose.model("profilePhoto", profilePhotoSchema);