import { useEffect } from 'react'
import { setMeta } from '../utils/seo'

export function useSeo(meta) {
  useEffect(() => {
    setMeta(meta)
  }, [meta])
}
