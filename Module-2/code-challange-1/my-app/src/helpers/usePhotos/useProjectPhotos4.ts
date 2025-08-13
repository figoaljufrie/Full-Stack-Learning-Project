'use client'
import { useEffect, useState } from "react"

export interface projectPhotos4 {
  imageUrl4: string;
  style4: string;
}

export function useProjectPhotos4() {
  const [photos4, setPhotos4] = useState<projectPhotos4[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPhotos4() {
      try {
        const response = await fetch(
          'https://api.backendless.com/2957847F-19F6-40EA-BF45-09BBC7138B28/77756B75-B34A-438C-BDFD-3C5EF6C28E57/data/projectPhotos4?sortBy=order%20ASC',
          {
            headers: {
              'Content-Type': 'application/json',
              "Accept": "application/json",
            },
          }
        )
        const data = await response.json()
        setPhotos4(data)
      } catch (error) {
        console.error("Failed to fetch project photos 4:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos4()
  }, [])

  return { photos4, loading4: loading }
}