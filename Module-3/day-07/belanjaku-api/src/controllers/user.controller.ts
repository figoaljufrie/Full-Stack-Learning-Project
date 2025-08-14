import { Request, Response } from "express";
import { handleSuccess } from "../helpers/success.handler";
import { handleError } from "../helpers/error.handler";

import { UserDTO } from "../dto/user.dto";
import { UserService } from "../service/user.service";

export class UserController {
  userService: UserService

  constructor() {
    this.userService = new UserService()
    this.create = this.create.bind(this)
    this.getAll = this.getAll.bind(this)
    this.login = this.login.bind(this)
  }

  public async login (req: Request, res: Response) {
    try {
      const { email, password, role}: UserDTO = req.body
      const result = await this.userService.login({
        email, password
      })
      handleSuccess (res, 'Successfully Login', result)
    } catch (error) {
      handleError (res, 'Failed to login', 500, (error as Error).message)
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { email, password, role }: UserDTO = req.body
      const result = await this.userService.create({
        email, password, role
      })
      handleSuccess(res, 'Successfully Created User', result)
    } catch (error) {
      handleError(res, "Failed Create User", 500, (error as Error).message)
      
    }
  }

  public async getAll (req: Request, res: Response) {
    try {
      const result = await this.userService.getAll()
      handleSuccess(res, 'Success Get All Users', result)
    } catch (error) {
      handleError(res, 'Failed to Get All User', 500, (error as Error).message)
    }
  }


}