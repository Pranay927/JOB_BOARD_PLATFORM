import express from 'express'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const router = express.Router();

import {Jobs} from "../db"
import { JWT_SECRET } from '../config';
import { jobSchema } from '../types';
import {auth} from "../middlewares/auth"
import { restrictTo } from '../middlewares/restrictTo';

// Route to create a new Job : restricted to user of Role: "company"
router.post('/', auth, restrictTo('Company'), async(req,res)=>{
    try {
        const {title, description, company} = req.body;
        // @ts-ignore
        const companyId = req.id;
        const jobSchemaCheck = jobSchema.safeParse({title,description,company})
        if(!jobSchemaCheck.success){
            res.status(400).json({Error: jobSchemaCheck.error});
            return;
        }
        const newJob = await Jobs.create({
            title,
            description,
            company,
            companyId
        })
        return res.json({Message:"Job created successfully"})
    } catch (error) {
        res.status(400).json({Error:error});
    }
})
// endpoint to get all the jobs listed
router.get('/', auth, async(req,res)=>{
    try {
        const allJobs = await Jobs.find();
        return res.json({JobsAvailable:allJobs});
        
    } catch (error) {
        res.status(400).json({Error:error});
    }
})

export default router;