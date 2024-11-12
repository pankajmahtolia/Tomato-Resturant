import { addToCart, removeFromCart, getCart } from "../controllers/CartController.js";
import authMiddleware from "../middleware/Auth.js";
import express from "express";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware, addToCart);
cartRouter.post("/remove",authMiddleware, removeFromCart);
cartRouter.post("/get",authMiddleware, getCart);

export default cartRouter;