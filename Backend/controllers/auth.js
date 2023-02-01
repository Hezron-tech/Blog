const authRouter= require("express").Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

const jwt = require ("jsonwebtoken")


authRouter.post('/registerUser', async(req,res)=>{
    try{

        const isExisting = await User.findOne({email:req.body.email})

        if(isExisting){
            throw new Error("User already exist")
        }
        
        const hashedPassword = await bcrypt.hash(req.body.password,10)

        const newUser = await User.create({...req.body, password:hashedPassword})

        const {password, ...others}= newUser._doc

        return res.status(201).json(others)

    }catch(error){
        res.status(500).json(error.message)

    }
})

authRouter.post('/loginUser', async(req,res)=>{
    try{

    }catch(error){
        
    }
})

module.exports= authRouter