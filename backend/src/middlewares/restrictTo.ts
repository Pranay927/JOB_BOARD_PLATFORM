import { NextFunction, Response, Request } from "express"
import { User } from "../db";

interface authRequest extends Request{
    role?: 'Admin'|'Company'|'Seeker'
}
export const restrictTo = (...rolesAllowed: string[])=>{
    
    return (req: authRequest, res: Response, next: NextFunction)=>{
        const userRole = req.role;
        if(!userRole) {
            console.log(userRole);
            return
        };

        if(!rolesAllowed.includes(userRole)){
            console.log(userRole)
            res.status(403).json({ Message: 'Access denied' });
            return;
        }
        next();
    }
}