import { loginUser , registerUser} from "../controllers/UserController.js";
import express from 'express'

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
