import express from "express";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";
import {
  submitFeedback,
  getAllFeedbacks,
  getUserFeedbacks
} from "../controllers/feedbackController.js";

const router = express.Router();

router.post("/", verifyToken, submitFeedback);
router.get("/mine", verifyToken, getUserFeedbacks);
router.get("/all", verifyAdmin, getAllFeedbacks);

export default router;
