

import { Pump } from '.basehub/react-pump'
import { draftMode } from 'next/headers'
import { aboutPageFragment, pricingPageFragment } from '@/lib/basehub-queries'
import { Header } from "@/components/Header";
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/about/Hero'
import { Team } from '@/components/about/Team';
import { Values } from '@/components/about/Values';

export default function Home() {
    return (
        <Pump
            draft={draftMode().isEnabled}
            next={{ revalidate: 30 }} // or { tags: ["basehub"] }
            queries={[{ aboutPage: aboutPageFragment }]}
        >
            {async ([{ aboutPage }]) => {
                'use server'
                return (
                    <>
                        <main>
                            <Header />
                            <Hero {...aboutPage} />
                            <Values />
                            <Team />
                            <Footer />
                        </main>
                    </>
                )
            }}
        </Pump>
    )
}