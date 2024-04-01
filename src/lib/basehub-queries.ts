import {
  AboutPage,
  AboutPageGenqlSelection,
  FieldsSelection,
  LandingPage,
  LandingPageGenqlSelection,
  LinkComponent,
  LinkComponentGenqlSelection,
  PricingPage,
  PricingPageGenqlSelection,
} from ".basehub";


export const linkFragment = {
  _id: true,
  href: true,
  label: true,
  variant: true,
} satisfies LinkComponentGenqlSelection;

export const landingPageFragment = {
  hero: {
    title: true,
    subtitle: {
      json: { content: true },
    },
    getStartedLink: linkFragment,
    contactUsLink: linkFragment,
  },
  devTools: {
    title: true,
    subTitle: true,
    features: {
      items: {
        _title: true,
        subTitle: true,
        image: true
      },
    }
  },
  testSuites: {
    title: true,
    subTitle: true,
    features: {
      items: {
        _title: true,
        subtitle: true,
        description: true,
        image: true
      }
    }
  },
  faq: {
    title: true,
    subTitle: true,
    questions: {
      items: {
        _title: true,
        summary: true,
        href: true,
        logos: true
      }
    }
  },
  cta: {
    title: true,
    getStartedLink: linkFragment
  },
  dynamicAnalysis: {
    title: true,
    subtitle: true,
    description: true,
    features: {
      items: {
        _title: true,
        feature: { json: { content: true } },
        icon: true
      }
    }
  },
  testimonials: {
    testimonials: {
      items: {
        _title: true,
        title: true,
        quote: true,
        image: true
      }
    }
  }
} satisfies LandingPageGenqlSelection;


export const pricingPageFragment = {
  hero: {
    title: {
      left: true,
      right: true
    },
    label: true,
    description: { json: { content: true }, }
  }
} satisfies PricingPageGenqlSelection;


export const aboutPageFragment = {
  hero: {
    title: true,
    subTitle: true,
    title1: true,
    description1: { json: { content: true }, },
    title2: true,
    description2: { json: { content: true }, },
  }
} satisfies AboutPageGenqlSelection

export type LandingPageFragment = FieldsSelection<LandingPage, typeof landingPageFragment>;
export type LinkFragment = FieldsSelection<LinkComponent, typeof linkFragment>;
export type PricingPageFragment = FieldsSelection<PricingPage, typeof pricingPageFragment>;
export type AboutPageFragment = FieldsSelection<AboutPage, typeof aboutPageFragment>;