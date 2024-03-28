import {
    FieldsSelection,
    Homepage,
    HomepageGenqlSelection,
    LinkComponent,
    LinkComponentGenqlSelection,
} from "basehub";

export const linkFragment = {
    _id: true,
    href: true,
    label: true,
    variant: true,
} satisfies LinkComponentGenqlSelection;

export const homepageFragment = {
    title: true,
    subtitle: {
        json: { content: true },
    },
    getStartedLink: linkFragment,
    contactUsLink: linkFragment,
} satisfies HomepageGenqlSelection;


export type HomepageFragment = FieldsSelection<Homepage, typeof homepageFragment>;
export type LinkFragment = FieldsSelection<LinkComponent, typeof linkFragment>;
