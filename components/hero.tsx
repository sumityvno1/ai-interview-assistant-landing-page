export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center md:pt-28">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
        AI Interview Assistant
      </p>
      <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        Questions, answers, and feedback in one view
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        Display the interview question, view the candidate&apos;s answer, and review a clear
        feedback summary.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#get-started"
          className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
        >
          Get started
        </a>
        <a
          href="#preview"
          className="w-full rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
        >
          See the interface
        </a>
      </div>
    </section>
  )
}
