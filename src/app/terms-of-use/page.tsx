import { Metadata } from 'next'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

import { TermsOfService } from '~/components/sections/legal/terms'

export const metadata: Metadata = {
  title: 'Terms of Use'
}

const Terms = () => {
  return (
    <>
      <Header />
      <div className="px-4">
        <TermsOfService />
      </div>
      <Footer />
    </>
  )
}

export default Terms
