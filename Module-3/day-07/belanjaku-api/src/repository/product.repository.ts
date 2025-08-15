import { prisma } from "../utils/prisma";
import { ProductDTO } from "../dto/product.dto";

export class ProductRepository {
    public create(data: ProductDTO) {
        return prisma.product.create({ data })
    }

    public async getAll() {
        return prisma.product.findMany()
    }

    public async getById(id: number) {
        return prisma.product.findUnique({
            where: {
                id_product: id
            }
        })
    }
}