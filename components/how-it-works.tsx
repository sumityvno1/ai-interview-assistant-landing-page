const steps = [
  { title: 'Show the question', description: 'The question prompt is displayed to the candidate.' },
  { title: 'Capture the answer', description: 'The candidate answers and the response is shown in the answer view.' },
  { title: 'Review the feedback', description: 'A feedback summary of the answer is presented for review.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="mx-auto max-w-6xl px-6 py-24">
      <h2 id="how-title" className="text-3xl font-semibold tracking-tight md:text-4xl">
        How it works
      </h2>
      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="flex flex-col gap-3 border-l-2 border-primary pl-5">
            <span className="font-mono text-sm text-accent">{`0${i + 1}`}</span>
            <h3 className="text-lg font-medium">{step.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function GetStarted() {
  return (
    <section id="get-started" aria-labelledby="cta-title" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground">
        <h2 id="cta-title" className="text-balance text-3xl font-semibold tracking-tight">
          Run your next interview with a clear view
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/80">
          Question, answer, and feedback, side by side.
        </p>
        <a
          href="#preview"
          className="mt-8 inline-block rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
        >
          See the interface
        </a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        AI Interview Assistant
      </div>
    </footer>
  )
}
