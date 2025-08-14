import { Request, Response, NextFunction } from "express";
import { PrismaUserRole } from "../dto/user.dto";

export class RBACMiddleware {
  checkRole(requiredRoles: PrismaUserRole[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const user = (req as any).user;

      if (!user) {
        res.status(401).json({ message: "Unauthorized User" });
        return;
      }

      if (!requiredRoles.includes(user.role)) {
        res.status(403).json({ message: "Forbidden Access: Insufficient Permissions" });
        return;
      }

      next();
    };
  }
}
