import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{ 
        type: String,
        enum: ['Admin', 'Company', 'Seeker'],
        default: 'Seeker'
    },
})

const jobSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
  
    },
    company:{
        type:String,
        required:true,
        unique:true
    },
    postedAt:{
        type: Date,
        default: Date.now 
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

})

const applicationSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    resumeUrl:{
        type:String
    },
    seekerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    jobId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Jobs'
    },
    appliedAt:{
        type: Date,
        default: Date.now
    }
})

export const User = mongoose.model("User", userSchema);
export const Jobs = mongoose.model("Jobs", jobSchema);
export const Application = mongoose.model("Application", applicationSchema)