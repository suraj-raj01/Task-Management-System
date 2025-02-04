const mongoose = require("mongoose");
const profilePhotoSchema = new mongoose.Schema({
    id: Number,
    imgname: {
        type: String,
        default: "User-Profile-PNG-Image"
    },
    empid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee'
    }
});

module.exports = mongoose.model("profilePhoto", profilePhotoSchema);