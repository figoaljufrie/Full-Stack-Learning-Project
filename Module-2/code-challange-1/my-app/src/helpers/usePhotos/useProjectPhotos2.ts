'use client'
import { useEffect, useState } from "react"

export interface ProjectPhoto2 {
  imageUrl2: string;
  style2: string;
}

export function useProjectPhotos2() {
  const [photos2, setPhotos2] = useState<ProjectPhoto2[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPhotos2() {
      try {
        const response = await fetch(
          'https://api.backendless.com/2957847F-19F6-40EA-BF45-09BBC7138B28/77756B75-B34A-438C-BDFD-3C5EF6C28E57/data/projectPhotos2?sortBy=order%20ASC',
          {
            headers: {
              'Content-Type': 'application/json',
              "Accept": "application/json",
            },
          }
        )
        const data = await response.json()
        setPhotos2(data)
      } catch (error) {
        console.error("Failed to fetch project photos 2:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos2()
  }, [])

  return { photos2, loading2: loading }
}