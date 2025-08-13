import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import { RegisterDTO } from "./register.dto";
import { LoginDTO } from "./login.dto";

export class UserController {
  constructor(private readonly userService: UserService) {}

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body as LoginDTO;
      const result = await this.userService.login(body);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body as RegisterDTO;
      const result = await this.userService.register(body);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.userService.getUsers();
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

  getUsersById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.userService.getUsersById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

  getMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.userService.getMe(req.user.id as string);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
}
