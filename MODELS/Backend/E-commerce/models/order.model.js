import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
  quantity: {
    type: Number,
  },
  productId: {
    type: mongoose.Schema.Types.OrderId,
    ref: "Product",
  },
});
const orderschema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.OrderId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemsSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["CANCALLED", "PENDING", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderschema);
