import { prisma } from "../utils/prisma";
import { UserDTO } from "../dto/user.dto";
import bcrypt from "bcrypt";
import { verify, sign, SignOptions } from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

export class UserRepository {
  //Function untuk create new user:
  public async create(data: UserDTO) {
    //bikin logika, kalau udah user udah ada, lewat findUnique = email.
    const findUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    //Kasih kondisi, kalau findUser udah ada throw Error = user udah ada
    if (findUser) {
      throw new Error("User Already Exist");
    }
    //Kalo kondisi findUser nggak jalan, berarti langsung create: Bikin hashed password buat ngacak password.
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        role: data.role
      },
    });
  }

  public async login(data: UserDTO) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    })
    //kalo user nggak ada
    if(!user) {
      throw new Error ('User not found')
    }

    const isValidPassword = await bcrypt.compare(data.password, user.password)

    //validasi apakah pass-nya sama atau ngga?

    if(!isValidPassword) {
      throw new Error ('Password is not the same')
    }

    const secretKey = process.env.JWT_SECRET_KEY as string
    const expiresIn = process.env.JWT_EXPIRES_IN as string

    return {
      accessToken: this.generateToken(data, secretKey, expiresIn)
    }

  }
  

  //Untuk search semua user yang udah login:
  public getAll() {
    return prisma.user.findMany();
  }

  private generateToken (user: UserDTO, secret: string, expiresIn: string) {
    const payload = {
      email: user.email,
      role: user.role
    }

    const options: SignOptions = {
      expiresIn: expiresIn as any
    };
    return sign(payload, secret as string, options);
  }

  public async validateToken(token: string) {
    try {
      if (!token || typeof token !== 'string') {
        throw new Error ('Token must be a valid string');
      }

      const decoded = verify(token, process.env.JWT_SECRET_KEY as string) as { email: string; role: string };

      const user = await prisma.user.findUnique({
        where : {
          email: decoded.email
        }
      })

      if (!user) {
        throw new Error ('User not found')
      }
      return user

    } catch (error) {
      throw new Error ('Invalid token: ' + (error as Error).message)
    }
  }


}
