import { useEffect } from 'react'
import { setMeta } from '../utils/seo'

export function useSeo({ title, description } = {}) {
  useEffect(() => {
    setMeta({ title, description })
  }, [title, description])
}
