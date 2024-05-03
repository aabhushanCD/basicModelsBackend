import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    name: String,
  },
  {}
);

export const Categories = mongoose.model("Categories", categoriesSchema);
