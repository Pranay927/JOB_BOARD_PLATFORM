import {z} from "zod";

export const inputSchema = z.object({
    username: z.string()
        .min(3,"Username must atleast be 3 characters long")
        .max(20,"Username must be atmost 20 characters long"),
    
    password: z.string()
        .min(5, "Password must be at least 8 characters long")
        .max(32, "Password must be at most 32 characters long"),
        // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        // .regex(/[0-9]/, "Password must contain at least one number")
        // .regex(/[\W_]/, "Password must contain at least one special character"),
    
})

  