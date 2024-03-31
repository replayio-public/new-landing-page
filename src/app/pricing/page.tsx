

import { PricingHero } from '@/components/pricing/sections/PricingHero'
import { PricingTable } from '@/components/pricing/sections/PricingTable'
import { Pump } from '.basehub/react-pump'
import { draftMode } from 'next/headers'
import { pricingPageFragment } from '@/lib/basehub-queries'
import { Header } from "@/components/Header";
import { CostCalculator } from '@/components/pricing/sections/CostCalculator'

export default function Home() {
    return (
        <Pump
            draft={draftMode().isEnabled}
            next={{ revalidate: 30 }} // or { tags: ["basehub"] }
            queries={[{ pricingPage: pricingPageFragment }]}
        >
            {async ([{ pricingPage }]) => {
                'use server'
                return (
                    <>
                        <main>
                            <Header />
                            <PricingHero {...pricingPage} />
                            <CostCalculator />
                            <PricingTable />
                        </main>
                    </>
                )
            }}
        </Pump>
    )
}