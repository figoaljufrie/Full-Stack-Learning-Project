import { TransactionController } from "../controllers/transaction.controller";
import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class TransactionRouter {
  private router = Router();
  private transactionController = new TransactionController();
  private authMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/transaction", this.transactionController.create);
    this.router.get("/transaction", this.authMiddleware.authenticate, this.transactionController.getAll)
  }

  public getRouter() {
    return this.router;
  }
}


// const transactionRouter = Router()
// const transactionController = new TransactionController()
// const authMiddleware = new AuthMiddleware()

// transactionRouter.post("/transaction", transactionController.create)
// transactionRouter.get("/transaction", authMiddleware.authenticate, transactionController.getAll)


// export default transactionRouter