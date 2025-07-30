import { useEffect, useState, useCallback } from 'react'
import { Experience } from '@/types/experience'

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  // define fetchExperiences outside useEffect using useCallback
  const fetchExperiences = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/experiences')
      if (!res.ok) throw new Error('Failed to fetch experiences')

      const data = await res.json()
      setExperiences(data as Experience[]) // ✅ type-safe
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred.')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchExperiences()
  }, [fetchExperiences])

  // expose refresh method
  const refresh = fetchExperiences

  return { experiences, loading, error, refresh }
}