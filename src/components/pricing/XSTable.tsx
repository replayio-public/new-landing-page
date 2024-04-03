import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function XSTable({ tiers, sections }: { tiers: any; sections: any }) {
  return <div></div> /*<div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
        {tiers.map((tier) => (
            <section
                key={tier.id}
                className={classNames(
                    tier.mostPopular ? 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200' : '',
                    'p-8'
                )}
            >
                <h3 id={tier.id} className="text-sm font-semibold leading-6 text-gray-900">
                    {tier.name}
                </h3>
                <p className="mt-2 flex items-baseline gap-x-1 text-gray-900">
                    <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                    <span className="text-sm font-semibold">/month</span>
                </p>
                <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                        tier.mostPopular
                            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                        'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    )}
                >
                    Buy plan
                </a>
                <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-900">
                    {sections.map((section) => (
                        <li key={section.name}>
                            <ul role="list" className="space-y-4">
                                {section.features.map((feature) =>
                                    feature.tiers[tier.name as keyof typeof feature.tiers] ? (
                                        <li key={feature.name} className="flex gap-x-3">
                                            <CheckIcon
                                                className="h-6 w-5 flex-none text-indigo-600"
                                                aria-hidden="true"
                                            />
                                            <span>
                                                {feature.name}{' '}
                                                {typeof feature.tiers[tier.name as keyof typeof feature.tiers] ===
                                                    'string' ? (
                                                    <span className="text-sm leading-6 text-gray-500">
                                                        ({feature.tiers[tier.name as keyof typeof feature.tiers]})
                                                    </span>
                                                ) : null}
                                            </span>
                                        </li>
                                    ) : null
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
        ))}
    </div>*/
}
