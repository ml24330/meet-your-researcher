import mongoose from 'mongoose';

export const Time = mongoose.model("Time", new mongoose.Schema({
    "uuid": String,
    "start": Number,
    "timeTaken": Number
}));

export const Score = mongoose.model("Score", new mongoose.Schema({
    "name": String,
    "time": Number
}));