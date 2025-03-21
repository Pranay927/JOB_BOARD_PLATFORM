import { JWT_SECRET } from "../config";
import jwt, { JwtPayload } from "jsonwebtoken"
import express, { Request, Response,NextFunction } from "express";

export const auth = async(req:Request, res: Response, next: NextFunction)=>{
    try {
        const {authorization}  = req.headers;
       
        const token  = authorization?.split(' ')[1];
        if(!token) return res.status(403).json({error: "Unauthorized"})
        if(JWT_SECRET===undefined) return;
        const decode = jwt.verify(token , JWT_SECRET);
    
        
        // @ts-ignore --fix this -----
        req.id = (decode as JwtPayload).id;
        
        // @ts-ignore --fix this -----
        req.role = (decode as JwtPayload).role;
        next();

    } catch (error) {
        res.status(400).json({Error: error})
        return;

    }
}