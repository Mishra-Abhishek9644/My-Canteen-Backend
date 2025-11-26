// routes/orderRoutes.js
import express from "express";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  cancelOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Customer
router.post("/create", verifyToken, createOrder);
router.get("/my-orders", verifyToken, getMyOrders);

// Admin
router.get("/all", verifyAdmin, getAllOrders);
router.put("/:id/status", verifyAdmin, updateOrderStatus);
router.put("/:id/cancel", verifyAdmin, cancelOrder); 
router.put("/:id/cancel", verifyToken, cancelOrder);  // << NEW

export default router;
