import Image from 'next/image'

import { Button, BaseHubButton } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { LandingPageFragment } from "@/lib/basehub-queries"

export function CallToAction({ cta }: LandingPageFragment) {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-900 py-24"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-4xl">
            {cta.title}
          </h2>

          <BaseHubButton className='mt-10' color="white" {...cta.getStartedLink} />
        </div>
      </Container>
    </section>
  )
}
