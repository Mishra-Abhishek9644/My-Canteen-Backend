// models/MenuItem.js
import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
  available: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("MenuItem", menuSchema);