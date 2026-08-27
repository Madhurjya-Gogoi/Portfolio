type Props = {
  label?: string
}

export default function ContourDivider({ label }: Props) {
  return (
    <div className="relative w-full py-2 select-none" aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-10 opacity-70"
      >
        <path
          d="M0,30 C150,10 250,50 400,30 C550,10 650,50 800,30 C950,10 1050,50 1200,30"
          fill="none"
          stroke="#2E4770"
          strokeWidth="1"
        />
        <path
          d="M0,40 C150,22 250,58 400,42 C550,22 650,58 800,42 C950,22 1050,58 1200,42"
          fill="none"
          stroke="#2E4770"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M0,20 C150,4 250,36 400,20 C550,4 650,36 800,20 C950,4 1050,36 1200,20"
          fill="none"
          stroke="#2E4770"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
      {label && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B1B33] px-4 font-mono text-[11px] tracking-[0.25em] text-[#E8A33D] uppercase">
          {label}
        </span>
      )}
    </div>
  )
}
