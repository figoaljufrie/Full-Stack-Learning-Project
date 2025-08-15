import { ProductDTO } from "../dto/product.dto";
import { ProductRepository } from "../repository/product.repository";

export class ProductService {
    productRepository: ProductRepository

    constructor(){
    this.productRepository = new ProductRepository()
    }

    public create(data: ProductDTO) {
        const product = this.productRepository.create(data)
        if (!product) {
            throw new Error ('Failed to Create a new Product')
        }
    }

    public async getAll() {
       const product = this.productRepository.getAll()
       if (!product) {
        throw new Error ('Failed to Get All Products')
       }
    }

    public async getById(id: number) {
       const product = this.productRepository.getById(id)
       if (!product) {
        throw new Error ('Failed to Get Product by Id')
       }
    }
}