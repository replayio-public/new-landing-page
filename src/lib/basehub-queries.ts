import {
    FieldsSelection,
    LandingPage,
    LandingPageGenqlSelection,
    LinkComponent,
    LinkComponentGenqlSelection,
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
    }
} satisfies LandingPageGenqlSelection;


export type LandingPageFragment = FieldsSelection<LandingPage, typeof landingPageFragment>;
export type LinkFragment = FieldsSelection<LinkComponent, typeof linkFragment>;
