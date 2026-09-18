import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function useTypewriter(text: string, speedMs = 45, startDelayMs = 300) {
  const prefersReducedMotion = useReducedMotion()
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return

    let i = 0
    let interval: ReturnType<typeof setInterval>
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setTyped(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speedMs)
    }, startDelayMs)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speedMs, startDelayMs, prefersReducedMotion])

  return {
    output: prefersReducedMotion ? text : typed,
    done: prefersReducedMotion ? true : done,
  }
}
