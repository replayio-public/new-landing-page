import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: 'A Journey of Driving Down Test Flakes to 0% at Metabase',
    href: 'https://blog.replay.io/a-journey-of-driving-down-test-flakes-to-0percent-at-metabase-part-3',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZjZDE3NGExMy0wNjJmLTRjNTUtOWU5NC1iNGE4OWVlNWJmMTElMkYwYzkyZjA5Ny1hNzU0LTRiY2QtYmMwNi1lZGM1NTU1NDQ2MzElMkZjb3Zlci5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD1jZDE3NGExMy0wNjJmLTRjNTUtOWU5NC1iNGE4OWVlNWJmMTEmaWQ9ZDhhZTRkMzktMmMwNC00YzMzLWEwOTYtODQyOGI2MjFmMzBkJmNhY2hlPXYyJndpZHRoPTYwMA==',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZjZDE3NGExMy0wNjJmLTRjNTUtOWU5NC1iNGE4OWVlNWJmMTElMkY2OWFmZDFjNi1mM2UzLTRlMjUtYTY4NS01YWMwNTZmMTE0ZGYlMkZpbXByb3ZlZC5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD1jZDE3NGExMy0wNjJmLTRjNTUtOWU5NC1iNGE4OWVlNWJmMTEmaWQ9YTZlNWEyODItYjM0ZS00MzQwLWFhZDYtYTQ3MzNhYmE0OTg3JmNhY2hlPXYyJndpZHRoPTYwMA=='
    }
  },
  {
    id: 1,
    title: 'Finding “false positive” tests with Replay.io',
    href: 'https://blog.replay.io/finding-%22false-positive%22-tests-with-replay.io',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZjZDE3NGExMy0wNjJmLTRjNTUtOWU5NC1iNGE4OWVlNWJmMTElMkYzYjVkYjRjNy00OTQzLTRhOWEtODYwMy1hYzcwZWIyMDFjMWMlMkZibG9ncG9zLndlYnA_dGFibGU9YmxvY2smc3BhY2VJZD1jZDE3NGExMy0wNjJmLTRjNTUtOWU5NC1iNGE4OWVlNWJmMTEmaWQ9OWE3ZmRhZjktOTYyZS00NjVjLTg2NmQtMzQ0NTZjMjRmMGYxJmNhY2hlPXYyJndpZHRoPTYwMA==',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 1,
    title: 'Debugging a Flaky Test with Replay',
    href: 'https://blog.replay.io/debugging-a-flaky-test-with-replay',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://image-forwarder.notaku.so/aHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkZzZWN1cmUubm90aW9uLXN0YXRpYy5jb20lMkYwYzQ3MmIyMC1jMDg5LTQyN2YtYjhiZS0yY2JkOTIxMmQxMmYlMkZTY3JlZW5zaG90XzIwMjMtMDctMzBfYXRfOC4xMC4xMl9QTS5wbmc_dGFibGU9YmxvY2smc3BhY2VJZD1jZDE3NGExMy0wNjJmLTRjNTUtOWU5NC1iNGE4OWVlNWJmMTEmaWQ9MTY4NmRjZDgtMjNjNi00YzVlLTliMGUtNmEwNzU1ODUyZGQ0JmNhY2hlPXYyJndpZHRoPTYwMA==',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
  // More posts...
]

export function Content() {
  return (
    <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            The time traveler&apos;s log
          </h2>
          <p className="mt-2 text-lg leading-8 text-slate-300">
            Stories of epic debugging adventures
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <article
              key={i}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                fill={true}
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>

        <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
            }}
          />
        </div>
      </div>
    </div>
  )
}
