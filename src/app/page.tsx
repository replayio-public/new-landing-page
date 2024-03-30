import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { Pricing } from '@/components/Pricing'
import { DevTools } from '@/components/sections/DevTools'
import { TestSuites } from '@/components/sections/TestSuites'
import { Testimonials } from '@/components/Testimonials'
import { Pump } from '.basehub/react-pump'
import { draftMode } from 'next/headers'
import { landingPageFragment } from '@/lib/basehub-queries'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <Pump
      draft={draftMode().isEnabled}
      next={{ revalidate: 30 }} // or { tags: ["basehub"] }
      queries={[{ landingPage: landingPageFragment }]}
    >
      {async ([{ landingPage }]) => {
        'use server'
        return (
          <>
            <main>
              <Header />
              <Hero {...landingPage} />
              <DevTools {...landingPage} />
              <TestSuites {...landingPage} />
              <CallToAction />
              <Testimonials />
              <Pricing />
              <Faqs />
            </main>
            <Footer />
          </>
        )
      }}
    </Pump>
  )
}
