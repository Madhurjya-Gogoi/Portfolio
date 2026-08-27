export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="grid-paper pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1B33]" />

      <div className="reveal relative z-10 flex flex-col items-center">
        {/* survey marker stamp */}
        <div className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-[#E8A33D]/90 md:text-sm">
          <span className="h-px w-8 bg-[#E8A33D]/60" />
          <span>26.1445° N, 91.7362° E — GUWAHATI, ASSAM</span>
          <span className="h-px w-8 bg-[#E8A33D]/60" />
        </div>

        <h1 className="font-display text-4xl font-semibold leading-tight text-[#EAF0FA] sm:text-6xl md:text-7xl">
          Madhurjya Gogoi
        </h1>
        <p className="mt-4 max-w-xl font-mono text-sm text-[#EAF0FA]/70 sm:text-base">
          Frontend &amp; full-stack developer — mapping fintech, biosecurity,
          and urban systems into working software.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="border border-[#E8A33D] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] transition-colors hover:bg-[#E8A33D] hover:text-[#0B1B33]"
          >
            View work
          </a>
          <a
            href="#contact"
            className="border border-[#2E4770] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#EAF0FA]/80 transition-colors hover:border-[#EAF0FA]/60 hover:text-[#EAF0FA]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="reveal absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#EAF0FA]/40">
        scroll
      </div>
    </section>
  )
}
