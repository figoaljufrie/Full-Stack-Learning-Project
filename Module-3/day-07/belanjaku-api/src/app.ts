import express, { Application } from 'express'
import userRouter from './routes/user.router'
import productRouter from './routes/product.router'
import transactionRouter from './routes/transaction.router'
import cors from 'cors'

const app: Application = express()
const PORT: number = 8000

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', productRouter)
app.use('/api', transactionRouter)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})