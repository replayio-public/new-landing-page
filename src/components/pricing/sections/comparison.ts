export const annualDiscount = 0.9
export const showAnnual = false
type Feature = {
  name: string
  description: string
  hidden?: boolean
}

export const FEATURES: Record<string, Feature> = {
  users: {
    name: 'Users',
    description: ''
  },
  runs: {
    name: 'Test runs',
    description: ''
  },
  recordings: {
    name: 'Uploaded recordings',
    description: ''
  },
  processed: {
    name: 'Instant replays',
    description: ''
  },
  rca: {
    name: 'Root cause analysis *',
    description: '',
    hidden: true
  },
  perf: {
    name: 'Perf regression detection *',
    description: '',
    hidden: true
  },
  retention: {
    name: 'Retention limit',
    description: '',
    hidden: true
  },
  support: {
    name: 'Customer Support',
    description: '',
    hidden: true
  }
}

type TierFeature = {
  label: string
  value: string | number
  hidden?: boolean
}

type TierIncluded = {
  name: string
  description: string
}

export type Tier = {
  name: string
  href: string
  description: string
  features: Record<string, string | number>
  included: TierIncluded[]
  featured: boolean
  price: number
}

export const tiers: Record<string, Tier> = {
  free: {
    name: 'Free',
    featured: false,
    price: 0,
    description: 'For small teams with a handful of flaky E2E tests.',
    href: '/register',
    features: {
      users: 50,
      runs: 'Unlimited',
      recordings: 100,
      processed: 20,
      rca: 0,
      perf: 0,
      retention: '7 days',
      support: 'Community'
    },
    included: [
      {
        name: 'Recent runs dashboard',
        description: ''
      },
      {
        name: 'Replay DevTools',
        description: ''
      },
      {
        name: 'Discord support',
        description: ''
      }
    ]
  },
  team: {
    name: 'Team',
    price: 75,
    description: 'For teams with a growing test suite.',
    href: '/register',
    featured: true,
    features: {
      users: 50,
      runs: 'Unlimited',
      recordings: 1000,
      processed: 100,
      rca: 0,
      perf: 0,
      retention: '7 days',
      support: 'Email'
    },
    included: [
      {
        name: 'Failing test dashboard',
        description: ''
      },
      {
        name: 'Flaky test dashboard',
        description: ''
      },
      {
        name: 'Email support',
        description: ''
      }
    ]
  },
  pro: {
    name: 'Pro',
    price: 350,
    description: 'For businesses who want to set E2E reliability goals.',
    href: '/register',
    featured: false,
    features: {
      users: 50,
      runs: 'Unlimited',
      recordings: 20000,
      processed: 250,
      rca: 0,
      perf: 0,
      retention: '7 days',
      support: 'Email'
    },
    included: [
      {
        name: 'Test Suite insights',
        description: ''
      },
      {
        name: 'SSO',
        description: ''
      },
      {
        name: 'Office hours',
        description: ''
      }
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: -1,
    featured: false,
    description: 'For organizations with custom needs at an enterprise scale.',
    href: '/register',
    features: {
      users: 'Unlimited',
      runs: 'Unlimited',
      recordings: 'Custom',
      processed: 'Custom',
      rca: 'Custom',
      perf: 'Custom',
      retention: '30 days',
      support: 'Premium'
    },
    included: [
      {
        name: 'Host your own storage',
        description: ''
      },
      {
        name: 'Custom legal terms',
        description: ''
      },
      {
        name: 'Account manager',
        description: ''
      },
      {
        name: 'Best practice workshops',
        description: ''
      }
    ]
  }
}

function mappedValue(feature: string) {
  return {
    name: FEATURES[feature].name,
    values: [
      tiers.free.features[feature],
      tiers.team.features[feature],
      tiers.pro.features[feature],
      tiers.enterprise.features[feature]
    ]
  }
}

const allTrue = [true, true, true, true]

export const sections = [
  {
    // name: "Plan limits",
    // subtitle: "Select the plan best for you",
    features: [
      mappedValue('users'),
      mappedValue('runs'),
      mappedValue('recordings'),
      mappedValue('processed'),
      mappedValue('retention'),
      mappedValue('support')
    ]
  },
  {
    name: 'Replay DevTools',
    subtitle: 'Debug your app with 100% reproducibility',
    features: [
      { name: 'Network monitor', values: allTrue },
      { name: 'Elements panel', values: allTrue },
      { name: 'Source viewer', values: allTrue },
      { name: 'Live Console logs', values: allTrue },
      { name: 'Playwright Panel', values: allTrue },
      { name: 'Cypress Panel', values: allTrue },
      { name: 'React DevTools', values: allTrue },
      { name: 'Redux DevTools', values: allTrue }
    ]
  },
  {
    name: 'Test Suite Analytics',
    subtitle: 'Maintain the health of your suite at scale',
    features: [
      { name: 'Recent test runs dashboard', values: allTrue },
      { name: 'Failing test dashboard', values: allTrue },
      { name: 'Flaky test dashboard', values: allTrue },
      { name: 'GitHub PR Comments', values: allTrue },
      { name: 'Loom integration', values: allTrue }
    ]
  }
]

// const comparisonTable = [
//     {
//         "category": "Replay DevTools",
//         "description": "Debug with 100% reproducibility",
//         "chart": `
//     # Browser DevTools
//       Network monitor	true true true true
//       Elements panel	true true true true
//       Source viewer	true true true true
//       In context comments	true true true true
//     # Time Travel
//       Live Console logs	true true true true
//       Jump to code	true true true true
//     # Framework DevTools
//       Playwright Panel	true true true true
//       Cypress Panel true true true true
//       React DevTools	true true true true
//       Redux DevTools	true true true true
//     `
//     },
//     {
//         "category": "Test Analytics",
//         "description": "Maintain your test suite at scale",
//         "chart": `
//        # Analytics
//         Recent test runs view	true true true true
//         Failing test view	false true true true
//         Flaky test view	false true true true
//         Top errors	false false true true
//        # Suite management
//         GitHub PR comments	true true true true
//         Test Suite SLOs	false false false true
//        # Notifications
//         Failing test detection false false false true
//         Flake test detection false false false true
//        `
//     },
//     {
//         "category": "Integrated workflows",
//         "description": "Connect with your favorite tools",
//         "chart": `
//        # Version control
//         GitHub	true true true true
//        # CI Environment
//         Github Actions	true true true true
//        # Issue trackers
//         GitHub	false true true true
//         Linear	false true true true
//         Jira	false true true true
//        # Collaboration tools
//         Loom	false true true true
//         Slack	false true true true
//         Discord	false true true true
//        `
//     }
// ]
