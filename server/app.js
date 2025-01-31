const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const Database = process.env.DATABASE_URL;
const adminRoute = require("./routes/adminRoute")
const employeeRoute = require("./routes/employeeRoute");

mongoose.connect(Database).then(()=>{
    console.log("Database Connected Successfull !!");
})

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use("/admin",adminRoute);
app.use("/employee",employeeRoute);
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

app.listen(PORT,()=>{
    console.log(`Server run on port ${PORT}`);
});