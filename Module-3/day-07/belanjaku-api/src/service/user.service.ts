import { UserDTO } from "../dto/user.dto";
import { UserRepository } from "../repository/user.repository";
import dotenv from "dotenv"

dotenv.config()

export class UserService {
  userRepository: UserRepository

  constructor(){
    this.userRepository = new UserRepository()
  }

  public async create(data: UserDTO) {
    const user = this.userRepository.create(data)
    if (!user) {
      throw new Error('Failed to Register')
    }
    return user;
  } 

  public async login(data: UserDTO) {
    const user = this.userRepository.login(data)
    if (!user) {
      throw new Error ('Failed to Login')
    }
    return user;
  }
  
  //Untuk search semua user yang udah login:
  public getAll() {
   const user = this.userRepository.getAll() 
   if (!user) {
    throw new Error ('Failed to Get All Users')
   }
   return user;
  }

  public async validateToken(token: string) {
    const userToken = this.userRepository.validateToken(token)
    if (!userToken) {
      throw new Error ('Failed to Generate Token.')
    }
    return userToken;
  }


}
