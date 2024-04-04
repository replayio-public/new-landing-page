import Image from 'next/image'
import { LandingPageFragment } from '~/lib/basehub-queries'
import { RichText } from 'basehub/react-rich-text'
import vamsi from '~/images/vamsi.jpeg'

const images = { vamsi }

export default function Carousel({ testimonials }: LandingPageFragment['hero']) {
  const testimonial = testimonials.items[0].testimonial
  return (
    <section className="overflow-hiddenpx-6 isolate lg:px-8">
      <div className="relative mx-auto max-w-2xl py-4 text-left sm:py-4 lg:max-w-2xl ">
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-4 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="text-md sm:text-md font-light leading-8 text-gray-900 sm:leading-5">
              <RichText>{testimonial.quote.json.content}</RichText>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-16">
            <Image
              src={images.vamsi}
              alt=""
              className="rounded-full bg-indigo-50 lg:rounded-full"
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <div className="mb-0 pb-0 font-medium leading-tight text-gray-900">
              {testimonial.name}
            </div>
            <div className="mt-0 pt-0 leading-tight text-gray-500">{testimonial.title}</div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
