import { useInView } from 'react-intersection-observer'

interface UseScrollRevealOptions {
  threshold?: number
  triggerOnce?: boolean
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, triggerOnce = true } = options

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })

  return { ref, inView }
}
