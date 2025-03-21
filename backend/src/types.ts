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

export const jobSchsema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    description: z.string().min(10, "Description must be at least 10 characters long"),
    company: z.string().min(2, "Company name must be at least 2 characters").max(50, "Company name too long"),
  });

export const jobSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  logo: z.string().url("Logo must be a valid URL").optional(), 
  type: z.enum(["Full-time", "Part-time", "Contract", "Internship"], {
    message: "Invalid job type",
  }),
  level: z.enum(["Entry", "Mid", "Senior", "Lead"], {
    message: "Invalid job level",
  }),
  salary: z.string().optional(), // Optional salary field
  location: z.string().min(2, "Location must be at least 2 characters long"),
});


