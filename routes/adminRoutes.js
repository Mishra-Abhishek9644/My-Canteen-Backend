import express from "express";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Test route
router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({
    message: "Welcome Admin!",
    user: req.user
  });
});

export default router;
