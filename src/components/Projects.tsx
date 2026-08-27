import { useReveal } from '../hooks/useReveal'
import SurveyCard from './SurveyCard'

type Project = {
  code: string
  name: string
  domain: string
  role: string
  description: string
  stack: string[]
  link?: string
}

const PROJECTS: Project[] = [
  {
    code: 'SITE-01',
    name: 'BizPilot',
    domain: 'Fintech · B2B platform',
    role: 'Frontend development',
    description:
      'A B2B fintech platform built with React and TypeScript, handling the kind of data-dense workflows where a single mislabeled figure has real consequences.',
    stack: ['React', 'TypeScript'],
  },
  {
    code: 'SITE-02',
    name: 'BioPlus',
    domain: 'Biosecurity platform',
    role: 'Frontend development',
    description:
      'A biosecurity platform interface designed for clarity under scrutiny — surfacing protocol and compliance information without burying the people using it.',
    stack: ['React', 'TypeScript', 'Node.js'],
  },
  {
    code: 'SITE-03',
    name: 'Urban Compass Software',
    domain: 'AI-assisted urban planning',
    role: 'Frontend development',
    description:
      'An AI-assisted urban planning platform with map-based visualization, translating planning data into a spatial interface that planners can actually navigate.',
    stack: ['React', 'Map visualization', 'AI-assisted tooling'],
  },
  {
    code: 'SITE-04',
    name: 'Online Exam Platform',
    domain: 'EdTech',
    role: 'Frontend development',
    description:
      'A web-based examination platform supporting online test creation, student assessments, and real-time score reporting.',
    stack: ['React', 'TypeScript', 'Node.js'],
  },
]

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className={visible ? 'reveal' : 'opacity-0'}>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8A33D]">
          Site survey
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-[#EAF0FA] sm:text-4xl">
          Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-1">
          {PROJECTS.map((project) => (
            <SurveyCard key={project.code}>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.25em] text-[#E8A33D]/80">
                    {project.code} · {project.domain}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[#EAF0FA]">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[#EAF0FA]/50">
                    {project.role}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#EAF0FA]/75 sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-[#2E4770]/50 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] uppercase tracking-wider text-[#EAF0FA]/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SurveyCard>
          ))}
        </div>
      </div>
    </section>
  )
}
