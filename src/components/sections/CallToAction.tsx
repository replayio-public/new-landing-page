import { BaseHubButton } from '@/components/Button'
import { Container } from '@/components/Container'
import { LandingPageFragment } from "@/lib/basehub-queries"

export function CallToAction({ cta }: LandingPageFragment) {
  return (
    <>
      <section
        id="get-started-today"
        className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl"
      >
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl tracking-tight text-white sm:text-4xl">
              {cta.title}
            </h2>

            <BaseHubButton className='mt-10' color="white" {...cta.getStartedLink} />
          </div>
        </Container>
        <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </section>
    </>
  )
}
