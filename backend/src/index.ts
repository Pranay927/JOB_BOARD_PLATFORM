import { PORT, DATABASE_URL } from "./config";
import express from "express"
import mongoose from "mongoose";
const app = express();
import user from "./routes/user"
import jobs from './routes/jobs'
import apply from "./routes/apply"
import cors from "cors";

app.use(cors())
app.use(express.json());
app.use("/api/v1/user", user);
app.use("/api/v1/jobs", jobs);
app.use("/api/v1/apply", jobs);




const main=async()=>{
    try {
        // If the dbUrl is not defined, throwing a error manually
        if(!DATABASE_URL) throw new Error("Please provide a database url for mongo.");
        await mongoose.connect(DATABASE_URL);

        //start the express server
        app.listen(PORT, ()=>{
            console.log(`Server running on PORT ${PORT}`)
        } )

    } catch (error) {
        console.log(error);
    }
}
main();