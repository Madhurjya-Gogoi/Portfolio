import { useReveal } from '../hooks/useReveal'

const SKILLS = [
  'React', 'TypeScript', 'Vue', 'Angular', 'Node.js',
  'MongoDB', 'PHP', 'Firebase', 'AWS', 'JavaScript', 'Python', 'Sentry', 'RTL', 'Cypress'
]

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <div
        ref={ref}
        className={visible ? 'reveal' : 'opacity-0'}
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8A33D]">
          Field notes
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-[#EAF0FA] sm:text-4xl">
          About
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#EAF0FA]/75 sm:text-lg">
          I build web applications end to end — from React and TypeScript
          front ends to the Node and Firebase services behind them. Most of
          my work has landed in domains where the interface has to represent
          something real: financial risk, biosecurity protocol, or a city's
          own geography. That means the UI has to be legible under pressure,
          not just polished.
        </p>

        <div className="mt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#EAF0FA]/50">
            Instruments
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="border border-[#2E4770] px-3 py-1.5 font-mono text-xs text-[#EAF0FA]/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
