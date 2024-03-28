import {
    FieldsSelection,
    LinkComponent,
    LinkComponentGenqlSelection,
} from "basehub";

export const linkFragment = {
    _id: true,
    href: true,
    label: true,
    variant: true,
} satisfies LinkComponentGenqlSelection;

export type LinkFragment = FieldsSelection<LinkComponent, typeof linkFragment>;
