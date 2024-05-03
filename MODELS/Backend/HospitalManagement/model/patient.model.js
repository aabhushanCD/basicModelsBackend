import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonalWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroud: {
      type: String,
      required: true,
    },
    gender: {
      type: string,
      enum: ["M", "F", "O"],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Hospital,
    },
  },
  {}
);

export const Patient = mongoose.model("Patient", patientSchema);
