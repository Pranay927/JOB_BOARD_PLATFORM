require("dotenv").config();

import express from "express"
import mongoose from "mongoose";
const app = express();

app.use(express.json());

const dbUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT

const main=async()=>{
    try {
        // If the dbUrl is not defined, throwing a error manually
        if(!dbUrl) throw new Error("Please provide a database url for mongo.");
        await mongoose.connect(dbUrl);

        //start the express server
        app.listen(PORT, ()=>{
            console.log(`Server running on PORT ${PORT}`)
        } )

    } catch (error) {
        console.log(error);
    }
}
main();