import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";


const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Welcome, authenticated user!", user: req.user });
});

export default router;
