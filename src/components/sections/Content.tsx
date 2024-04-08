import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: 'From Flaky to Flawless: Metabase’s Journey',
    href: 'https://blog.replay.io/a-journey-of-driving-down-test-flakes-to-0percent-at-metabase-part-3',
    description:
      'Metabase’s zero-flake achievement through focused refinements and robust testing protocols.',
    imageUrl: '/images/screenshots/content-1.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16'
  },
  {
    id: 2,
    title: 'The Truth Behind False Positives',
    href: 'https://blog.replay.io/finding-%22false-positive%22-tests-with-replay.io',
    description: 'Uncovering and resolving false positives with Replay.io’s analytical precision.',
    imageUrl: '/images/screenshots/content-2.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16'
  },
  {
    id: 3,
    title: "Replay's Flaky Test Fix: Debugging Done Right",
    href: 'https://blog.replay.io/debugging-a-flaky-test-with-replay',
    description: 'Efficient strategies for identifying and fixing flaky tests for good.',
    imageUrl: '/images/screenshots/content-3.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16'
  }
]

export function Content() {
  return (
    <div className="mx-auto mt-12 max-w-7xl sm:mt-16 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-50 px-6 py-16 text-left shadow-xl sm:rounded-xl sm:px-12">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Getting started with Replay
          </h2>
          <p className="mt-2 text-base leading-6 text-slate-500">
            Featured essays from the{' '}
            <a href="https://replay.io/blog/" className="underline">
              replay.io blog
            </a>
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <article
              key={i}
              className="relative isolate flex flex-col overflow-hidden rounded-lg bg-white px-6 pt-64 sm:pt-32 lg:pt-64"
            >
              <Image
                fill={true}
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10" />
              <div className="absolute inset-0 -z-10 rounded-lg ring-1 ring-inset ring-gray-900/10" />
              <div className="flex-1 rounded">
                <h3 className="mb-6 text-2xl font-bold leading-6 text-white">
                  <a href={post.href} className="hover:underline">
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div
            className="col-span-1 rounded-lg bg-black pt-32 lg:col-span-1"
            style={{
              backgroundImage: "url('images/screenshots/course-thumbnail.png')",
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="p-4 text-2xl font-bold text-white">Replay.io Crash Course</div>
            <div className="my-0 p-4 pt-0 text-gray-600 text-white">
              Drive down your debugging time from hours to minutes. Learn how to use Replay.io from
              A to Z in this free and simple course.
            </div>
            <div className="flex justify-center">
              <a
                href="http://replay.help/course"
                className="inline-block w-1/2 rounded-full bg-white p-3 text-center font-bold text-black"
              >
                Get started {'->'}
              </a>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-2">
            <div className="flex flex-col">
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>Introduction</div> <span className="text-gray-400">2:37</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>Creating your first replay</div> <span className="text-gray-400">2:10</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>DevTools overview</div> <span className="text-gray-400">2:45</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>Print statements</div> <span className="text-gray-400">5:20</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>Commenting and sharing a replay</div>{' '}
                <span className="text-gray-400">1:56</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>Using the timeline</div> <span className="text-gray-400">4:11</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>Network panel</div> <span className="text-gray-400">2:28</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>Elements panel</div> <span className="text-gray-400">3:42</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 p-2 pl-0">
                <div>Source explorer and search</div> <span className="text-gray-400">3:00</span>
              </div>
              <div className="flex justify-between p-2 pl-0">
                <div>React panel</div> <span className="text-gray-400">2:28</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
