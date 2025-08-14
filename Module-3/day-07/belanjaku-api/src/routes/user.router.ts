import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";

const userRouter = Router()
const userController = new UserController()
const authMiddleware = new AuthMiddleware()

userRouter.post('/auth/register', userController.create)
userRouter.post('/login', userController.login)
userRouter.get('/users',  authMiddleware.authenticate, userController.getAll)
export default userRouter