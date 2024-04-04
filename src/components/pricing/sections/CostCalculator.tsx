'use client'
import { useState } from 'react'
import { CreditCardIcon } from '@heroicons/react/20/solid'

type CostField = {
  label: string
  value: number
}

const daysInTheMonth = 20
const costPerRun = 0.006

const costs = {
  cypressTeamPerRun: 0.006,
  plans: {
    team: {
      cost: {
        plan: 75,
        processed: 0.4,
        uploaded: 0.02
      },
      included: {
        uploaded: 100,
        processed: 20
      }
    },
    pro: {
      cost: {
        plan: 350,
        processed: 0.2,
        uploaded: 0.01
      },
      included: {
        uploaded: 1000,
        processed: 100
      }
    }
  }
}

const fields = {
  specs: { label: 'Specs in the suite', value: 50 },
  testsPerSpec: { label: 'Tests per spec', value: 3 },
  devs: { label: 'Number of developers', value: 16 },
  pushes: { label: 'Pushes per day', value: 15 },
  retries: { label: 'Retry limit', value: 3 },
  flakyTests: { label: 'Flaky tests in the suite', value: 10 },
  failingTests: { label: 'Failing tests in the suite', value: 5 },
  uploaded: { label: 'Uploaded recordings', value: 420 },
  processed: { label: 'Processed recordings', value: 120 }
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Emphasis = ({
  children,
  color = 'indigo'
}: {
  color?: 'indigo' | 'green'
  children: React.ReactNode
}) => (
  <span
    className={classNames(
      'mx-1 whitespace-nowrap rounded border font-semibold ',
      color === 'indigo'
        ? 'border-indigo-200 bg-indigo-100 text-indigo-700'
        : 'border-green-200 bg-green-100 text-green-700'
    )}
  >
    {' '}
    {children}{' '}
  </span>
)

const Field = ({
  className,
  label,
  value
}: {
  className?: string
  label: string
  value: CostField['value']
}) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="mt-4 flex flex w-full gap-x-4 px-6">
      <dt className={`flex ${className}`}>
        <span className="sr-only">Status</span>
        {label != '' && <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />}
      </dt>
      <dd className="flex-grow text-sm leading-6 text-gray-500">{label}</dd>
      <dd className="text-sm leading-6 text-gray-500">
        {editMode ? (
          <input
            type="text"
            name="replayCost"
            className="rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={value}
          />
        ) : (
          value
        )}
      </dd>
    </div>
  )
}

function Panel({
  title,
  subtitle,
  fields,
  summary,
  className
}: {
  title: string
  subtitle: string
  fields: CostField[]
  summary: React.ReactNode
  className?: string
}) {
  return (
    <div className={`max-w-lg lg:row-end-1 ${className}`}>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 ">
        <dl className="flex flex-wrap">
          <div className="flex-auto border-b border-gray-900/5 pb-3 pl-6 pt-6">
            <dt className="text-lg font-semibold leading-6 text-gray-900">{title}</dt>
            <dt className="font text-sm leading-6 text-gray-900">{subtitle}</dt>
          </div>
          {fields.map(({ label, value }) => (
            <Field key={label} label={label} value={value} />
          ))}
        </dl>
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">{summary}</div>
      </div>
    </div>
  )
}

export function CostCalculator() {
  const testRunsPerDay =
    (fields.specs.value +
      (fields.retries.value - 1) * (fields.failingTests.value + fields.flakyTests.value)) *
    fields.testsPerSpec.value *
    fields.devs.value *
    fields.pushes.value
  const testRunsPerMonth = testRunsPerDay * daysInTheMonth
  const cypressCost = testRunsPerMonth * costs.cypressTeamPerRun
  const numTests = fields.specs.value * fields.testsPerSpec.value

  const recordingsUploadedPerDay =
    fields.specs.value +
    (fields.flakyTests.value * (fields.retries.value - 1) +
      fields.failingTests.value * fields.retries.value)

  const recordingsUploadedPerMonth = recordingsUploadedPerDay * daysInTheMonth
  const recordingsProcessedPerDay =
    (fields.failingTests.value + fields.flakyTests.value) * (fields.retries.value - 1)

  const recordingsProcessedPerMonth = recordingsProcessedPerDay * daysInTheMonth

  const replayCost =
    costs.plans.team.cost.plan +
    recordingsUploadedPerMonth * costs.plans.team.cost.uploaded +
    recordingsProcessedPerMonth * costs.plans.team.cost.processed

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div>
        <div className="mx-auto mt-32 max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Cost Model</h2>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            How Replay compares with other tools.
          </h2>
          <p className="mx-auto mb-12 mt-3 max-w-2xl text-base leading-6 text-gray-600">
            Most testing tools charge per test run which discourages you from growing the test suite
            and scales with the cost of CI. With Replay, you only pay for the recordings you need to
            debug failures after the fact.
          </p>
        </div>

        <div className="row-gap-8 grid max-w-4xl grid-cols-2 gap-x-8">
          <Panel
            title="Cypress"
            subtitle="Cypress and other tools charge by test runs in CI."
            className="lg:col-start-1"
            fields={[fields.specs, fields.testsPerSpec, fields.devs, fields.pushes]}
            summary={
              <div className="text-sm font-medium leading-6 text-gray-800">
                In the typical month, the
                <Emphasis>{numTests}</Emphasis> tests would be run
                <Emphasis>{testRunsPerMonth.toLocaleString()}</Emphasis>
                times which would result in a
                <Emphasis color="green">${cypressCost.toLocaleString()}</Emphasis> Cypress bill.
              </div>
            }
          />

          <Panel
            title="Replay"
            subtitle="Replay charges by recordings uploaded and processed."
            className="lg:col-start-2"
            fields={[fields.failingTests, fields.flakyTests, fields.uploaded, fields.processed]}
            summary={
              <div className="text-sm font-medium leading-6 text-gray-900">
                With Replay,
                <Emphasis>{recordingsUploadedPerMonth.toLocaleString()}</Emphasis>
                recordings would be uploaded,
                <Emphasis>{recordingsProcessedPerMonth.toLocaleString()}</Emphasis>
                recordings would be processed, and the plan would cost
                <Emphasis color="green">${replayCost.toLocaleString()}</Emphasis>.
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
