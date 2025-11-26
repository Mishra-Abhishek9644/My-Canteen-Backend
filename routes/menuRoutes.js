// routes/menuRoutes.js  ← NEW VERSION (replace everything)
import express from "express";
import MenuItem from "../models/MenuItem.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all menu items (public)
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find({ available: true }).sort({ category: 1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ADD one or many items (admin only) – NOW SUPPORTS ARRAY!
router.post("/", verifyAdmin, async (req, res) => {
  try {
    const items = Array.isArray(req.body) ? req.body : [req.body];

    // Basic validation
    for (const item of items) {
      if (!item.name || !item.price || !item.category) {
        return res.status(400).json({ message: "Each item needs name, price, category" });
      }
    }

    const createdItems = await MenuItem.insertMany(items);
    res.status(201).json(createdItems);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;