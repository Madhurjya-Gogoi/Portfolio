import { useReveal } from '../hooks/useReveal'

// TODO: replace with your real contact details.
const EMAIL = 'your.email@example.com'
const LINKEDIN = 'https://linkedin.com/in/your-profile'
const GITHUB = 'https://github.com/your-github-username'

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" />
      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-2xl text-center ${visible ? 'reveal' : 'opacity-0'}`}
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8A33D]">
          Coordinates
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-[#EAF0FA] sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 text-sm text-[#EAF0FA]/65 sm:text-base">
          Open to frontend and full-stack roles, freelance work, or just a
          conversation about a project.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="border border-[#E8A33D] px-8 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#E8A33D] transition-colors hover:bg-[#E8A33D] hover:text-[#0B1B33]"
          >
            {EMAIL}
          </a>

          <div className="mt-2 flex gap-6 font-mono text-xs uppercase tracking-[0.2em] text-[#EAF0FA]/60">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8A33D]">
              LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8A33D]">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
