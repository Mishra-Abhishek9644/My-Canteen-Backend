import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

/* 📌 ROUTES */
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import menuSeed from "./routes/menuSeed.js";

/* 🔥 ADDED ROUTES */
import feedbackRoutes from "./routes/feedbackRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

/* 🔥 Make backend images accessible */
const __dirname = path.resolve();
app.use("/assets", express.static(path.join(__dirname, "assets")));

/* API ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/seed", menuSeed);

/* Newly enabled */
app.use("/api/feedback", feedbackRoutes);
app.use("/api/messages", messageRoutes);

/* 🟢 Root check */
app.get("/", (req, res) => {
  res.send("MyCanteen Backend Running Successfully 🔥");
});

/* MongoDB connection */
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((error) => console.log("❌ MongoDB Error:", error));

/* SERVER START */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server Live at http://localhost:${PORT}`);
});
