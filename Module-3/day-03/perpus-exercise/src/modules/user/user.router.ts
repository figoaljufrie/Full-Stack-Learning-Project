import { Router } from "express";
import { UserController } from "./user.controller";
import { JwtMiddleware } from "../../middleware/jwt.middleware";

export class UserRouter {
  private readonly router: Router = Router()

  constructor(private readonly userController: UserController) {
    this.initRoutes();
  }

  private initRoutes = (): void => {
    this.router.post("/register", this.userController.register)
    this.router.get("/", this.userController.getUsers)
    this.router.get("/me", JwtMiddleware.verifyToken, this.userController.getMe)
    this.router.get("/:id", this.userController.getUsersById )
    this.router.post("/login", this.userController.login )
  };

  getRouter(): Router {
    return this.router
  }
}