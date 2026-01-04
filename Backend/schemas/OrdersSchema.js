import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String, // buy or sell
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // refers to model name
    required: true
  },
});

export { OrdersSchema };
