import { prisma } from "../utils/prisma";
import { TransactionDTO } from "../dto/transaction.dto";
import crypto from "crypto";
import { TransactionRepository } from "../repository/transaction.repository";

export class TransactionService {
  transactionRepository: TransactionRepository

  constructor() {
    this.transactionRepository = new TransactionRepository()
  }
  public async create(data: TransactionDTO) {
   const transaction = this.transactionRepository.create(data)
   if (!transaction) {
    throw new Error ('Failed to create a transaction')
   }
  }

  public getAll() {
  const transaction = this.transactionRepository.getAll()
  if (!transaction) {
    throw new Error ('Failed to Get All Transaction')
  }
  }
}