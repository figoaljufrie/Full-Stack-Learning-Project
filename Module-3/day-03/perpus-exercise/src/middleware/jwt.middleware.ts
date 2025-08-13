import { NextFunction, Request, response, Response } from "express";
import { appConfig } from "../config";
import jwt, { TokenExpiredError } from "jsonwebtoken";

export interface JwtPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

const jwtSecret = appConfig.jwtSecret;

export class JwtMiddleware {
  private static readonly secretKey = jwtSecret;

static verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  console.log("🔑 JWT Secret in middleware:", JwtMiddleware.secretKey);
  console.log("📜 Authorization header:", req.headers.authorization);
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).send({
      message: "Authorization Failed, Token Is Missing.",
    });
    return;
  }

  jwt.verify(token, JwtMiddleware.secretKey, (err, payload) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        res.status(401).send({ message: "Token Expired." });
        return;
      }
      res.status(401).send({ message: "Token Is Invalid" });
      return;
    }

    req.user = payload as JwtPayload; // ✅ Assign when successful
    next(); // ✅ Continue to controller
  });
};

}
