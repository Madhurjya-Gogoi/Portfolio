import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

/** Panel with architectural corner-bracket framing, like a survey plot marker. */
export default function SurveyCard({ children, className = '' }: Props) {
  return (
    <div
      className={`relative border border-[#2E4770]/60 bg-[#122544]/70 p-6 md:p-8 ${className}`}
    >
      {/* corner brackets */}
      {(['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'] as const).map(
        (pos) => {
          const isTop = pos.includes('top-0')
          const isLeft = pos.includes('left-0')
          return (
            <span
              key={pos}
              className={`pointer-events-none absolute h-4 w-4 ${pos} border-[#E8A33D] ${
                isTop ? 'border-t-2' : 'border-b-2'
              } ${isLeft ? 'border-l-2' : 'border-r-2'}`}
            />
          )
        }
      )}
      {children}
    </div>
  )
}
