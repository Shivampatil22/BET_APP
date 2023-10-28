const express = require("express");
const router = express.Router();
const {Verifytoken}=require("../middlerware");
const {Signup,Login}=require("../task/UserFunctions")

// api to post data from signup form
router.post("/register", Signup);




//api to post data from login form 
router.post("/login", Login);


module.exports=router;