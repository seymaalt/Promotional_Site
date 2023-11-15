const asyncHandler = require("express-async-handler");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")


const register = asyncHandler(async (req,res) => {
   const {name,email,password} = req.body;

   if(!name || !email || !password){
    res.status(400);
    throw new Error("All fields are mandatory");
   }

   const userAvailable = await User.findOne({email});
   if(userAvailable){
    res.status(400);
    throw new Error("User already registered");
   }
   const saltRounds = 10;
   const salt = await bcrypt.genSalt(saltRounds);



   const hashedPassword = await bcrypt.hash(password,salt);
   const user = await User.create({
        name,
        email,
        passwordHash:hashedPassword,
        passwordSalt:salt
   });


    res.json({message : `${user}`});
});

const login = asyncHandler(async (req,res) => {

    const {email,password} = req.body;

    if(!email || !password){
        res.status(400);
    throw new Error("All fields are mandatory"); 
    }

    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.passwordHash))){
        const accessToken = jwt.sign({
            user:{
                username:user.name,
                email:user.email,
                id:user.id,
                favorities:user.favorities
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"60m"}
        );
        res.status(200).json({accessToken:accessToken, User:user});
    }else{
        res.status(401);
        throw new Error("email or password is not valid");
    }
   
});

const current = asyncHandler(async (req,res) => {
    res.json(req.user);
});

module.exports = {
    login,
    register,
    current
};