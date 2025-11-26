import express from "express";
import { verifyAdmin } from "../middleware/authMiddleware.js";
import { submitMessage, getAllMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", submitMessage);
router.get("/all", verifyAdmin, getAllMessages);

export default router;
