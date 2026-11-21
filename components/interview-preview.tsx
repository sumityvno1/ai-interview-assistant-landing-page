import { CircleHelp, ClipboardCheck, MessageSquareText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

function PanelHeading({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border px-5 py-3">
      <Icon className="size-4 text-accent" aria-hidden="true" />
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  )
}

function Placeholder({ widths }: { widths: string[] }) {
  return (
    <div className="flex flex-col gap-2.5" aria-hidden="true">
      {widths.map((w, i) => (
        <span key={i} className={`h-2.5 rounded-full bg-border ${w}`} />
      ))}
    </div>
  )
}

export function InterviewPreview() {
  return (
    <section id="preview" aria-labelledby="preview-title" className="mx-auto max-w-6xl px-6 pb-24">
      <h2 id="preview-title" className="sr-only">
        Interface preview
      </h2>
      <div className="overflow-hidden rounded-2xl border border-border bg-secondary/40 shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-border px-5 py-3">
          <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">Interview session</span>
        </div>

        <div className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
          <article className="rounded-xl border border-border bg-card">
            <PanelHeading icon={CircleHelp} title="Question prompt" />
            <div className="flex flex-col gap-4 p-5">
              <span className="w-fit rounded-md bg-primary px-2 py-1 font-mono text-xs text-primary-foreground">
                Current question
              </span>
              <p className="text-pretty leading-relaxed">
                The active interview question is displayed here, large and easy to read.
              </p>
              <Placeholder widths={['w-full', 'w-4/5']} />
            </div>
          </article>

          <article className="rounded-xl border border-border bg-card">
            <PanelHeading icon={MessageSquareText} title="Candidate answer" />
            <div className="flex flex-col gap-4 p-5">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                The candidate&apos;s response appears in this view for review.
              </p>
              <Placeholder widths={['w-full', 'w-11/12', 'w-full', 'w-3/4', 'w-5/6']} />
            </div>
          </article>

          <article className="rounded-xl border border-border bg-card">
            <PanelHeading icon={ClipboardCheck} title="Feedback summary" />
            <div className="flex flex-col gap-5 p-5">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                A summary of the answer is generated here.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  Strengths
                </span>
                <Placeholder widths={['w-full', 'w-2/3']} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  To improve
                </span>
                <Placeholder widths={['w-5/6', 'w-1/2']} />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
