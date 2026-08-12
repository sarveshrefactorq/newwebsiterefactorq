import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const [visible, setVisible] = useState(false)

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)

          observer.disconnect()
        }
      },

      { threshold: 0.15 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      ref={ref}
    >
      {children}
    </div>
  )
}
