import express from "express"
const router = express.Router();

import { Application } from "../db";
import {auth} from "../middlewares/auth"
import {restrictTo} from "../middlewares/restrictTo"

router.post('/:jobId', auth, restrictTo('Seeker'),async(req, res)=>{
    try {
        // @ts-ignore
        const {id} = req.id;
        const {name, resumeUrl} = req.body;
        const {jobId} = req.params;

        if (!name || !resumeUrl) {
            return res.status(400).json({ error: "Name and resume URL are required" });
        }

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