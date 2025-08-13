import express { Express, Request, Response } from 'express';
import cors from 'cors';
import { PORT } from '../config';

export class App {
  app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
  }

  private configure() {
    this.app.use(
      cors({
        allowedHeaders: ['Content-Type', 'Authorization'],
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
    );
    this.app.use(express.json());
    }

    private routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello, World!');
    });
  }

  public start() {
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}