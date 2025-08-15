import { ProductController } from "../controllers/product.controller";
import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class ProductRouter {
  private router = Router();
  private productController = new ProductController();
  private authMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/products", this.productController.create)
    this.router.get("/products", this.authMiddleware.authenticate, this.productController.getAll)
  }

  public getRouter() {
    return this.router
  }
}


// const productRouter = Router()
// const productController = new ProductController()
// const authMiddleware = new AuthMiddleware()

// productRouter.post("/products", productController.create)
// productRouter.get("/products", authMiddleware.authenticate, productController.getAll)

// export default productRouter