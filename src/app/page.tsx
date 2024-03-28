import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Pump } from "basehub/react-pump";
import { draftMode } from "next/headers";
import { LinkFragment, homepageFragment, linkFragment } from "@/lib/basehub-queries";


export default function Home() {
  return (
    <Pump
      draft={draftMode().isEnabled || process.env.DRAFT_MODE === "true"}
      next={{ revalidate: 30 }} // or { tags: ["basehub"] }
      queries={[
        { homepage: homepageFragment }
      ]}
    >
      {async ([{ homepage }]) => {
        "use server";
        return (
          <>
            <main>
              <Hero homepage={homepage} />
              <PrimaryFeatures />
              <SecondaryFeatures />
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
