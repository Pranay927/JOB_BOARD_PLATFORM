"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var router = express_1.default.Router();
var db_1 = require("../db");
var config_1 = require("../config");
var types_1 = require("../types");
var auth_1 = require("../middlewares/auth");
router.post("/signup", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, role, inputCheck, hashedPassword, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password, role = _a.role;
                inputCheck = types_1.inputSchema.safeParse({ username: username, password: password });
                if (!inputCheck.success) {
                    res.status(400).json({ Error: inputCheck.error });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcrypt_1.default.hash(password, 7)];
            case 1:
                hashedPassword = _b.sent();
                return [4 /*yield*/, db_1.User.create({
                        username: username,
                        password: hashedPassword,
                        role: role || undefined
                    })];
            case 2:
                _b.sent();
                res.json({ Message: "User Signed up successfully" });
                return [2 /*return*/];
            case 3:
                error_1 = _b.sent();
                res.status(400).json({ Error: error_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("/signin", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, inputCheck, user, isPassword, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                inputCheck = types_1.inputSchema.safeParse({ username: username, password: password });
                if (!inputCheck.success) {
                    res.status(400).json({ Error: inputCheck.error });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, db_1.User.findOne({
                        username: username
                    })];
            case 1:
                user = _b.sent();
                if (!user) {
                    res.status(400).json({ Error: "User doesn't exist" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
            case 2:
                isPassword = _b.sent();
                if (!isPassword) {
                    res.status(400).json({ Error: "Invalid Username or Password" });
                    return [2 /*return*/];
                }
                if (config_1.JWT_SECRET === undefined)
                    return [2 /*return*/];
                token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, config_1.JWT_SECRET);
                res.json({ Message: "".concat(user.username, " is signed in! "),
                    Token: token });
                return [2 /*return*/];
            case 3:
                error_2 = _b.sent();
                res.status(400).json({ Error: error_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("/authenticated", auth_1.auth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        id = req.id;
        try {
            res.json({ Message: "Your Token is " + id });
        }
        catch (error) {
            res.status(400).json({ Error: error });
        }
        return [2 /*return*/];
    });
}); });
exports.default = router;
