import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'The code behind our code',
        description:
            'Integrity, honesty, and decency. Our principles are not aspirations but constraints. They lie behind every action we take, or decision we make. They ensure that we remain true to our course and true to ourselves.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Embedded values',
        description:
            <>
                <p>Our values anchor our aspirations and drive us forward.</p>
                <p>We are making software development faster, more accessible, more inclusive, and more exciting. We are dedicated to building a world where everyone is technically literate, a world where we are better equipped to overcome the greatest of challenges.</p>
            </>,
        href: '#',
        icon: UsersIcon,
    }
]

export function Values() {
    return (
        <div className="bg-slate-900 pb-32 sm:pb-64 flex items-center ">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-lg font-semibold leading-7 text-slate-200">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-300">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href={feature.href} className="text-sm font-semibold leading-6 text-slate-300">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
