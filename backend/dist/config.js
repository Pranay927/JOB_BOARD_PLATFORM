"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_URL = exports.PORT = exports.JWT_SECRET = void 0;
require("dotenv").config();
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.PORT = process.env.PORT;
exports.DATABASE_URL = process.env.DATABASE_URL;
