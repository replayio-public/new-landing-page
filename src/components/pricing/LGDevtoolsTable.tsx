import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

import { devToolsSections, devToolsTiers } from './sections/comparison'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function LGDevtoolsTable() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Time Travel Debugging</h2> */}
        <p className="mx-auto mt-2 max-w-2xl font-bold tracking-tight text-gray-900 text-indigo-600 sm:text-xl">
          Debug the failed test with time travel enhanced Browser DevTools
        </p>
      </div>

      <div className="isolate mt-10 hidden lg:block">
        <div className="relative -mx-8">
          {devToolsTiers.some((tier) => tier.featured) ? (
            <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
              <div
                className="flex w-1/4 px-4"
                aria-hidden="true"
                style={{
                  marginLeft: `${(Object.values(devToolsTiers).findIndex((tier) => tier.featured) + 1) * 25}%`
                }}
              >
                <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
              </div>
            </div>
          ) : null}
          <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
            <caption className="sr-only">Pricing plan comparison</caption>
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <thead>
              <tr className="">
                <th scope="col" className="pt-6  xl:pt-8">
                  <div className="text mb-4 text-left font-semibold leading-7 text-gray-900">
                    DevTools
                  </div>
                </th>
                {devToolsTiers.map((tier) => (
                  <th key={tier.name} scope="col" className=" px-6 pt-6 xl:px-8 xl:pt-8">
                    <div className="text mb-4 text-center font-semibold leading-7 text-gray-900">
                      {tier.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-red-500">
              {devToolsSections.map((section, sectionIdx) => (
                <Fragment key={section.name}>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th scope="row" className="py-4 text-sm font-normal leading-6 text-gray-900">
                        {feature.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                      </th>
                      {feature.values.map((value, idx) => {
                        return (
                          <td key={`${feature.name}-${idx}-${value}`} className="px-6 py-4 xl:px-8">
                            {typeof value === 'string' || typeof value === 'number' ? (
                              <div className="text-center text-sm leading-6 text-gray-500">
                                {value}
                              </div>
                            ) : (
                              <>
                                {value === true ? (
                                  <CheckIcon
                                    className="mx-auto h-5 w-5 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="mx-auto h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {value === true ? 'Included' : 'Not included'}
                                </span>
                              </>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
