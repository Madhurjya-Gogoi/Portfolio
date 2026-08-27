import { useReveal } from '../hooks/useReveal'

// TODO: replace with your actual GitHub username and repo list.
const GITHUB_USERNAME = 'your-github-username'

const REPOS = [
  { name: 'calculator-app', description: 'A small calculator built to practice component state and UI logic.' },
  { name: 'redux-toolkit-demo', description: 'A demo app wiring up Redux Toolkit for predictable state management.' },
]

export default function Repos() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="repos" className="mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8A33D]">
          Field samples
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-[#EAF0FA] sm:text-4xl">
          Side projects
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-[#EAF0FA]/60">
          Smaller repositories where I've tried out an idea or a new tool.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {REPOS.map((repo) => (
            <a
              key={repo.name}
              href={`https://github.com/${GITHUB_USERNAME}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#2E4770]/60 bg-[#122544]/50 p-5 transition-colors hover:border-[#E8A33D]/60"
            >
              <p className="font-mono text-sm text-[#EAF0FA] group-hover:text-[#E8A33D]">
                {repo.name}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#EAF0FA]/55">
                {repo.description}
              </p>
            </a>
          ))}
        </div>

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#EAF0FA]/60 underline decoration-[#2E4770] underline-offset-4 hover:text-[#E8A33D]"
        >
          See all repositories →
        </a>
      </div>
    </section>
  )
}
