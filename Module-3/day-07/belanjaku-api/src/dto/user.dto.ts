import { UserRole as PrismaUserRole } from "../generated/prisma"

export { PrismaUserRole };


export interface UserDTO {
    email: string,
    password: string,
    role?: PrismaUserRole
}