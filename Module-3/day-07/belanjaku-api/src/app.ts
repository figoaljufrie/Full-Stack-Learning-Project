import express, { Application } from 'express'
import { UserRouter } from './routes/user.router'
import { ProductRouter } from './routes/product.router'
import { TransactionRouter } from './routes/transaction.router'
import cors from 'cors'

export class App {
    private app: Application
    private port: number

    constructor(port: number = 8000) {
this.app = express()
this.port = port
this.initializeMiddleware()
this.initializeRoutes()
    }

    public initializeMiddleware() {
        this.app.use(cors({
            origin: 'http://localhost:3000'
        }))
        this.app.use(express.json())
    }

    public initializeRoutes(){
        this.app.use('/api', new ProductRouter().getRouter())
        this.app.use('/api', new TransactionRouter().getRouter())
        this.app.use('/api', new UserRouter().getRouter())
    }

    public listen() {
        this.app.listen(this.port,()=> {
            console.log (`Server is running on http://localhost:${this.port}`)
        })
    }
}
const app = new App()
app.listen()



// const app: Application = express()
// const PORT: number = 8000

// app.use(cors({
//     origin: 'http://localhost:3000'
// }))
// app.use(express.json())
// app.use('/api', userRouter)
// app.use('/api', productRouter)
// app.use('/api', transactionRouter)

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`)
// })