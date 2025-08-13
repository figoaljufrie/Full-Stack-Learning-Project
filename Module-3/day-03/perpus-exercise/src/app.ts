import express, { json } from "express";

//Cors: Untuk security, yang bisa akses ke backend siapa aja.
import cors from "cors";
import { appConfig } from "./config";
import { errorMiddleware } from "./middleware/error.middleware";
import { UserService } from "./modules/user/user.service";
import { PrismaService } from "./modules/prisma/prisma.service";
import { UserController } from "./modules/user/user.controller";
import { UserRouter } from "./modules/user/user.router";
import { PasswordService } from "./modules/user/password.service";

export default class App {
  public app;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.app.use(errorMiddleware);
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
  }

  private routes(): void {
    const userService = new UserService(new PrismaService(), new PasswordService());
    const userController = new UserController(userService);
    const userRouter = new UserRouter(userController);

    this.app.use('/user', userRouter.getRouter());

    this.app.get("/", (_, res) => {
      res.send("Hello World");
    });
  }

  public start(): void {
    this.app.listen(appConfig.port, () => {
      console.log(`Server is running on http://localhost:${appConfig.port}`);
    });
  }
}
