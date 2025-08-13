'use client'
import { useEffect, useState } from "react"

export interface ProjectPhoto {
  imageUrl: string;
  style: string;
}

export function useProjectPhotos() {
  const [photos, setPhotos] = useState<ProjectPhoto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    async function fetchPhotos() {
      try {
        const response = await fetch (
          'https://api.backendless.com/2957847F-19F6-40EA-BF45-09BBC7138B28/77756B75-B34A-438C-BDFD-3C5EF6C28E57/data/projectPhotos',
          {
            headers: {
              'Content-Type': 'application/json',
              "Accept": "application/json",
              // 'user-token': 'YOUR-USER-TOKEN (if required)'
            },
          }
        )
        const data = await response.json()
        setPhotos(data)
      } catch (error) {
        console.error("Failed to fetch project photos:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPhotos()
  },[]) // Only Run once on mount

  return { photos, loading }
}