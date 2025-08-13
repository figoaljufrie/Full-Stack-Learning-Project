import { Response } from "express";

type SuccessResponse<T> = {
  status: string;
  message: string;
  data: T;
};

export function handleSuccess<T>(res: Response, data: T, message: string, statusCode = 200): void {
  const response: SuccessResponse<T> = {
    status: 'success',
    message,
    data
  };
  
  res.status(statusCode).json(response);
}