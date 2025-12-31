import express from "express";
import { createOrder, getMyOrders, getAllOrders } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.get("/my", authMiddleware, getMyOrders);
router.get("/", authMiddleware, getAllOrders);

export default router;
