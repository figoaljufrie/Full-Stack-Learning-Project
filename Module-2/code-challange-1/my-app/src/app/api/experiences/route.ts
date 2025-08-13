import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://api.backendless.com/2957847F-19F6-40EA-BF45-09BBC7138B28/77756B75-B34A-438C-BDFD-3C5EF6C28E57/data/experiences`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await res.json()
  return NextResponse.json(data)
}