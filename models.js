"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = exports.Time = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.Time = mongoose_1.default.model("Time", new mongoose_1.default.Schema({
    "uuid": String,
    "start": Number,
    "timeTaken": Number
}));
exports.Score = mongoose_1.default.model("Score", new mongoose_1.default.Schema({
    "name": String,
    "time": Number
}));
