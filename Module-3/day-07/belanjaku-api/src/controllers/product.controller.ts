import { Request, Response } from "express";
import { ProductDTO } from "../dto/product.dto";
import { handleSuccess } from "../helpers/success.handler";
import { handleError } from "../helpers/error.handler";
import { ProductService } from "../service/ProductService";

//ini class buat nampung function2nya.
export class ProductController {
  productService: ProductService

  constructor() {
    this.productService = new ProductService()
    this.create = this.create.bind(this)
  }

  //ini function buat create:
  public async create(req: Request, res: Response) {
    try {
      const { title, description, stock, image, price }: ProductDTO = req.body
      const result = await this.productService.create({
        title, description, stock, image, price
      })
      handleSuccess(res, 'Successfully Created Product', result)
    } catch (error) {
     handleError (res, 'Failed to Create Product', 500, (error as Error).message) 
    }
  }

  public async getAll (req: Request, res: Response) {
    try {
      const result = await this.productService.getAll
      handleSuccess(res, 'Success Get All Products', result)
    } catch (error) {
      handleError(res, 'Failed to Get All Products', 500, (error as Error).message)
    }
  }
}