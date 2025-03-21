"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.Jobs = exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Company', 'Seeker'],
        default: 'Seeker'
    },
});
var jobSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    logo: {
        type: String
    }, // Optional company logo URL
    postedAt: {
        type: Date,
        default: Date.now,
    },
    type: {
        type: String,
        enum: ["Full-time", "Part-time", "Contract", "Internship"],
    },
    level: {
        type: String,
        enum: ["Entry", "Mid", "Senior", "Lead"],
    },
    salary: {
        type: String,
    },
    location: {
        type: String,
    },
    companyId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});
var applicationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    resumeUrl: {
        type: String,
        required: true
    },
    seekerId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    jobId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'Jobs'
    },
    appliedAt: {
        type: Date,
        default: Date.now
    }
});
exports.User = mongoose_1.default.model("User", userSchema);
exports.Jobs = mongoose_1.default.model("Jobs", jobSchema);
exports.Application = mongoose_1.default.model("Application", applicationSchema);
