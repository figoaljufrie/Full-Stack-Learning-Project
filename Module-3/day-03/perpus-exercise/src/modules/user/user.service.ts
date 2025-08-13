import { ApiError } from "../../utils/api-error";
import { PrismaService } from "../prisma/prisma.service";
import { RegisterDTO } from "./register.dto";
import { prismaExclude } from "../prisma/utils";
import { PasswordService } from "./password.service";
import { LoginDTO } from "./login.dto";
import jwt from "jsonwebtoken";
import { appConfig } from "../../config";

export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService
  ) {}

  login = async (body: LoginDTO) => {
    //body
    const { email, password } = body;

    //cari user berdasarkan email
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // kalo user gak ada, throw error
    if (!user) {
      throw new ApiError("User Not Found", 404);
    }

    //cari password yang diinput dengan password yang udah di hasd
    const isPasswordValid = await this.passwordService.comparePassword(
      password,
      user.password
    );

    //kalo salah, throw error
    if (!isPasswordValid) {
      throw new ApiError("Invalid Password", 401);
    }

    const token = jwt.sign({ id: user.id }, appConfig.jwtSecret, {
      expiresIn: "24h",
    });

    return {
      message: "Login Success",
      token, // ✅ include token
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  };

  public register = async (body: RegisterDTO) => {
    const { email, name, password } = body;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ApiError("Email already exists.", 400);
    }

    const hashedPassword = await this.passwordService.hashPassword(password);

    // If user doesn't exist, create a new user
    const user = await this.prisma.user.create({
      data: { email, name, password: hashedPassword },
    });

    return user;
  };

  getUsers = async () => {
    const users = await this.prisma.user.findMany({
      select: prismaExclude("User", ["password"]),
    });
    return users;
  };

  getUsersById = async (id: string) => {
    const users = await this.prisma.user.findUnique({
      where: { id },
      select: prismaExclude("User", ["password"]),
    });

    if (!users) {
      throw new ApiError("User Not Found", 404);
    }

    return users;
  };

  getMe = async (id: string) => {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: prismaExclude("User", ["password"]),
    });

    if (!user) {
      throw new ApiError("User Not Found", 404);
    }

    return user;
  };
}
