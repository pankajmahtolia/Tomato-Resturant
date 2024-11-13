import express from "express";
import authMiddleware from "../middleware/Auth.js";
import { listOrders, placeOrder, userOrders, verifyOrder } from "../controllers/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders",authMiddleware, userOrders);
orderRouter.get("/list",authMiddleware, listOrders);

export default orderRouter;