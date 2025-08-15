import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class UserRouter {
  private router = Router();
  private userController = new UserController();
  private authMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/auth/register", this.userController.create);
    this.router.post("/login", this.userController.login);
    this.router.get("/users", this.authMiddleware.authenticate, this.userController.getAll);
  }

  public getRouter() {
    return this.router;
  }
}