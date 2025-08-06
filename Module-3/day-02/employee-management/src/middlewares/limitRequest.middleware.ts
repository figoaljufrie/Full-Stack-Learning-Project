import { Request, Response, NextFunction } from "express";

const requestMap: Record<string, { timestamps: number[]}> = {} //untuk record request-nya.

const MAX_REQUESTS = 2 // Hanya bisa melakukan request sebanyak 2x, setelah itu tunggu 5 detik.

const BLOCK_DURATION = 5000 // 10 detik

export function limitRequest (req: Request, res: Response, next: NextFunction) {
  const forwarded = req.headers ['x-forwarded-for'] as string
  
  const ip = forwarded?.split(',')[0]?.trim() || req.socket.remoteAddress || "unknown"
  const now = Date.now()

  if (!requestMap[ip]) {
    requestMap[ip] = { timestamps: [] }
  }
  const timestamps = requestMap[ip].timestamps

  const validTimestamps = timestamps.filter(ts => now - ts < BLOCK_DURATION)

  if (validTimestamps.length >= MAX_REQUESTS) {
    const waitTime = BLOCK_DURATION
    return res.status(429).json({
      message: `Too many requests. Please wait for ${Math.ceil(waitTime / 1000)} seconds`
    });
  }

  //simpan request baru
  validTimestamps.push(now)
  requestMap[ip].timestamps = validTimestamps
  next();
}
