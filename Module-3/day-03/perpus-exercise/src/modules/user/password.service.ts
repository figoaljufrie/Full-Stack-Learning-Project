import bcrypt from "bcrypt";

export class PasswordService {
  //ini ngehash password
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  //compare password yg diinput sama yg di hash.
  async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword)
  }
}