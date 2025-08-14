import { TransactionController } from "../controllers/transaction.controller";
import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth.middleware";

const transactionRouter = Router()
const transactionController = new TransactionController()
const authMiddleware = new AuthMiddleware()

transactionRouter.post("/transaction", transactionController.create)
transactionRouter.get("/transaction", authMiddleware.authenticate, transactionController.getAll)


export default transactionRouter