export default function Carousel() {
  return (
    <section className="overflow-hiddenpx-6 isolate lg:px-8">
      <div className="relative mx-auto max-w-2xl py-4 text-left sm:py-4 lg:max-w-2xl ">
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-4 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="text-md sm:text-md font-light leading-8 text-gray-900 sm:leading-5">
              <p>
                “When we switched from DeploySentinel to Replay Time Travel, we burned down our
                failing test backlog and started achieving a{' '}
                <span className="font-medium">97%</span> week-over-week test success rate.”
              </p>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-24">
            <img
              className="rounded-full bg-indigo-50 lg:rounded-full"
              src="https://media.licdn.com/dms/image/C4D03AQHNFFS7lcWmTA/profile-displayphoto-shrink_100_100/0/1646359237867?e=1717632000&v=beta&t=OYrG2BmoKidb4VF-ExHv4tRd3ErX51tlM9ajqkimy3c"
              alt=""
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <div className="mb-0 pb-0 font-medium leading-tight text-gray-900">Vamsi Peri</div>
            <div className="mt-0 pt-0 leading-tight text-gray-500">
              Director of Engineering, Metabase
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
