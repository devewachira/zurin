import useInView from '../hooks/useInView'
import type { ReactNode } from 'react'

export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={className + ' ' + (inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-3')}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
