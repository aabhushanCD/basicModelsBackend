import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({}, {});

export const Record = mongoose.model("Record", recordSchema);
