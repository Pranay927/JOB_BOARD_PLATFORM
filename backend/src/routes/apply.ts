import express from "express"
const router = express.Router();

import { Application } from "../db";
import {auth} from "../middlewares/auth"
import {restrictTo} from "../middlewares/restrictTo"

router.post('/', auth, restrictTo('Seeker'),async(req, res)=>{
    try {
        // @ts-ignore
        const {id} = req.id;
        const {name, resumeUrl, jobId} = req.body;

        await Application.create({
            name,
            resumeUrl,
            seekerId:id,
            jobId
        })
    } catch (error) {
        return res.json({Error:error})
    }
})
export default router;