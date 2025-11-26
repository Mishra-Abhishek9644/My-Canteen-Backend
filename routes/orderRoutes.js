import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

import {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus
} from "../controllers/orderController.js";

const router = express.Router();

// Customer routes
router.post("/create", verifyToken, createOrder);
router.get("/my-orders", verifyToken, getMyOrders);

// Admin routes
router.get("/all", verifyToken, verifyAdmin, getAllOrders);
router.put("/:id/status", verifyToken, verifyAdmin, updateOrderStatus);

export default router;
