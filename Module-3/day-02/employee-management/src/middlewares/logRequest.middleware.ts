import { Request, Response, NextFunction } from 'express';

export function logRequest (req: Request, res: Response, next: NextFunction): void{
  const timestamp = new Date().toLocaleString();
  const method = req.method;
  const originalUrl = req.originalUrl;

  //untuk menampilkan ip adress:
  const forwarded = req.headers['x-forwarded-for'] as string | undefined;
  const rawIp = forwarded ? forwarded.split(',')[0] : req.ip;
  const ip = rawIp === '::1' ? 'localhost (127.0.0.1)' : rawIp;

  console.log(`[${timestamp}] ${method} ${originalUrl}, accessed from IP ${ip}`);

  // time-stamp -> menampilkan waktu akses request
  // req.method -> record http request apa yang digunakan ( get, post, put, atau delete)
  // req.originalUrl -> record base url API yang digunakan


  next();
}