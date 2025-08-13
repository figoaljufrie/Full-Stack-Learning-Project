'use client'
import { useEffect, useState } from "react"

export interface projectPhotos3 {
  imageUrl3: string;
  style3: string;
}

export function useProjectPhotos3() {
  const [photos3, setPhotos3] = useState<projectPhotos3[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPhotos3() {
      try {
        const response = await fetch(
          'https://api.backendless.com/2957847F-19F6-40EA-BF45-09BBC7138B28/77756B75-B34A-438C-BDFD-3C5EF6C28E57/data/projectPhotos3?sortBy=order%20ASC',
          {
            headers: {
              'Content-Type': 'application/json',
              "Accept": "application/json",
            },
          }
        )
        const data = await response.json()
        setPhotos3(data)
      } catch (error) {
        console.error("Failed to fetch project photos 3:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos3()
  }, [])

  return { photos3, loading3: loading }
}