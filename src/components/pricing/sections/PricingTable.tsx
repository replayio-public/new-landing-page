import { LGTable } from '../LGTable'
import { XSTable } from '../XSTable'

export function PricingTable() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Test Suite Tiers</h2>
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Select the plan that&lsquo;s best for you
          </p>
        </div>

        {/* xs to lg */}
        {/* <XSTable tiers={tiers} sections={sections} /> */}

        {/* lg+ */}
        <LGTable />
      </div>
    </div>
  )
}
