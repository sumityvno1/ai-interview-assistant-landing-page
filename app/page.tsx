import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { GetStarted, HowItWorks, SiteFooter } from '@/components/how-it-works'
import { InterviewPreview } from '@/components/interview-preview'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <InterviewPreview />
        <Features />
        <HowItWorks />
        <GetStarted />
      </main>
      <SiteFooter />
    </>
  )
}
