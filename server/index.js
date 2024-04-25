const express = require("express")
const cors = require ("cors")
const fs = require ("fs")
const app = require ()
const db = "mongodb+srv://AmeerHamzaKhan:<bagrisami123>@cluster0.70pzv8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose = require ("mongoose")
const schema = mongoose.Schema;
const SignupModel = New Schema ({
    Email: String,
    Dob : Date,
    FatherName: String,
    gender: String,
    password: String,
})
const schemamodel= mongoose.model(signup,Signupmodel);
app.post("/signup" , (req,res)=> {
    const {name,fathername,gender,Dob,Email,password} = req.body
})
