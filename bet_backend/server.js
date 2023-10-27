//IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const UserRouter =require("./routes/userRoutes")
require("dotenv").config();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(UserRouter);
// app.use(router);



//dbconnection
mongoose
    .connect(process.env.dburl, {
        autoIndex: true
    })
    .then(() => {
        app.listen(5500)
        console.log("connected");
    })
    .catch((err) => {
        console.log("something went wrong")
        console.log(err)
    })


