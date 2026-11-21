import { CircleHelp, ClipboardCheck, MessageSquareText } from 'lucide-react'

const features = [
  {
    icon: CircleHelp,
    title: 'Question prompt display',
    description: 'Shows the current interview question clearly so the candidate knows what to answer.',
  },
  {
    icon: MessageSquareText,
    title: 'Candidate answer view',
    description: "Presents the candidate's answer alongside the question it responds to.",
  },
  {
    icon: ClipboardCheck,
    title: 'Feedback summary',
    description: 'Condenses the answer into a summary of what went well and what to improve.',
  },
]

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 id="features-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
          Key features
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Three views that cover each part of an interview response.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title} className="rounded-xl border border-border bg-background p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-medium">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
