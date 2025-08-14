import { prisma } from "../utils/prisma";
import { TransactionDTO } from "../dto/transaction.dto";
import crypto from "crypto";

export class TransactionService {
  public async create(data: TransactionDTO) {
    return prisma.$transaction(async(tx) => {
      
      //generate invoice ID yang unik

      const invoiceId = `INV-${crypto.randomBytes(4).toString('hex').toUpperCase()}`
      let totalAmount = 0

      //loop items untuk hitung total & update stok.

      for (const item of data.cart) {
        const product = await tx.product.findUnique({
          where: {
            id_product: item.id_product
          }
        })

        //jika product tidak tersedia:

        if(!product) {
          throw new Error(`Product with id ${item.id_product} not found`)
        }

        //jika stock permintaan kurang dari persediaan:

        if (product.stock < item.quantity) {
          throw new Error (`Insufficient Stock for Product ${product.title}`)
        }

        //kurangi stok:
        await tx.product.update({
          where: {id_product: item.id_product},
          data: {
            stock: product.stock - item.quantity
          }
        })

        totalAmount += product.price * item.quantity
      }

      //simpan transaksi:

      const transaction = await tx.transaction.create({
        data: {
          invoice_id: invoiceId,
          userId: data.id_user,
          cart: JSON.stringify(data.cart.map((item) => ({
            id_product: item.id_product,
            quantity: item.quantity
        }))),
        payment: data.payment
        }
      })
      return { ...transaction, totalAmount}

    })
  }

  public getAll() {
    return prisma.transaction.findMany()
  }
}