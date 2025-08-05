import { Response } from "express";

export function errorHandler(res: Response, error: unknown): void {
  console.error(error); // Log the error for debugging purposes

  // Send a generic error response
  res.status(500).json({
    status: 500,
    message: (error as Error).message || "Internal Server Error",
  });
}