import { ProductController } from "../controllers/product.controller";
import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth.middleware";

const productRouter = Router()
const productController = new ProductController()
const authMiddleware = new AuthMiddleware()

productRouter.post("/products", productController.create)
productRouter.get("/products", authMiddleware.authenticate, productController.getAll)

export default productRouter