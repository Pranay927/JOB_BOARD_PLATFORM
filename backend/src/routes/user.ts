import express from 'express'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const router = express.Router();

import {User} from "../db"
import { JWT_SECRET } from '../config';
import { inputSchema } from '../types';
import {auth} from "../middlewares/auth"

router.post("/signup", async(req, res)=>{
    try {
        const {username, password} = req.body;
        const inputCheck = inputSchema.safeParse({username, password});
        if(!inputCheck.success){
            res.status(400).json({Error: inputCheck.error});
            return;
        }
        const hashedPassword  = await bcrypt.hash(password,7)
        await User.create({
            username, 
            password : hashedPassword
        })
        res.json({Message: "User Signed up successfully"});
        return;
    } catch (error) {
        res.status(400).json({Error:error});
    }
})
router.post("/signin", async(req, res)=>{
    try {
        const {username, password} = req.body;
        const inputCheck = inputSchema.safeParse({username, password});
        if(!inputCheck.success){
            res.status(400).json({Error: inputCheck.error});
            return;
        }
        const user = await User.findOne({
            username
        })
        if(!user){
            res.status(400).json({Error:"User doesn't exist"});
            return;
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            res.status(400).json({Error:"Invalid Username or Password"});
            return;
          }
        
        if(JWT_SECRET === undefined) return;
        const token = jwt.sign({id:user._id}, JWT_SECRET)
        res.json({Message: `${user.username} is signed in! `,
                  Token:token});
        
        return;
        } catch (error) {
            res.status(400).json({Error:error});
        }
    })
    router.post("/authenticated", auth, async(req, res)=>{
        // @ts-ignore
        const {id}  = req;
        
        try {
            res.json({Message:"Your Token is "+id})
        } catch (error) {
            res.status(400).json({Error:error});
    }
})


export default router;
