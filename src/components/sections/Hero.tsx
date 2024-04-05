import Image from 'next/image'

import { BaseHubButton } from '~/components/Button'
import { Container } from '~/components/Container'
import logoReact from '~/images/hero-logos/react.svg'
import logoGlide from '~/images/hero-logos/glide.svg'
import logoApolloGraphql from '~/images/hero-logos/apollo-graphql.svg'
import logoCodeSandbox from '~/images/hero-logos/code-sandbox.svg'
import logoMetabase from '~/images/hero-logos/metabase.svg'
import logoVercel from '~/images/hero-logos/vercel.svg'
import logoWeightsAndBiases from '~/images/hero-logos/weights-and-biases.svg'
import { LandingPageFragment } from '~/lib/basehub-queries'
import { RichText } from 'basehub/react-rich-text'
import { Carousel } from '~/components/Carousel'
import styles from '../../styles/Landingpage.module.css'
import Cal from './hero/Cal'

export function Hero({ hero }: LandingPageFragment) {
  return (
    <div className="relative overflow-hidden ">
      <Container className="relative z-10 max-w-4xl pt-20 text-center lg:pt-20">
        <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Move fast{' '}
          <span className="relative whitespace-nowrap">
            <span className={`${styles.colorPrimaryAccent} relative`}>without</span>
          </span>{' '}
          breaking things.
        </h1>
        <div className="mx-auto mt-4 max-w-3xl rounded-lg bg-white/75 p-2 text-lg tracking-tight text-slate-700">
          <RichText>{hero.subtitle.json.content}</RichText>
        </div>

        <div className="mb-32 mt-10 flex justify-center gap-x-6">
          <BaseHubButton {...hero.getStartedLink} />
          <Cal link={hero.contactUsLink} />
        </div>

        <div className="mb-12 mt-12 w-full rounded-lg border border-slate-300/10  bg-white/75 px-4 py-2">
          <p className="hidden font-display text-base text-slate-900">{hero.logosTitle}</p>

          <ul role="list" className="flex flex-wrap items-center justify-center gap-x-8 saturate-0">
            {[
              [
                { name: 'WeightsBiases', logo: logoWeightsAndBiases },
                { name: 'Vercel', logo: logoVercel },
                { name: 'Metabase', logo: logoMetabase },
                { name: 'Glide', logo: logoGlide },
                { name: 'Code Sandbox', logo: logoCodeSandbox },
                { name: 'React', logo: logoReact },
                { name: 'Apollo GraphQL', logo: logoApolloGraphql }
              ]
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="mb-1">
                      <Image src={company.logo} alt={company.name} unoptimized />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          {/* <Carousel testimonials={hero.testimonials.items} /> */}
        </div>
      </Container>
    </div>
  )
}
