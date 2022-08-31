import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 my-20 overflow-hidden bg-indigo-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-center text-blue-900 sm:text-5xl">
              Build Apps In Minutes!
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900 text-center max-w-sm mx-auto">
              Make beautiful m-commerce apps in a flash for your customers without learning to code.
              </p>
              
            <Button href="/pricing" className="hidden text-center lg:block max-w-xs min-h-sm mx-auto mt-8 py-4 text-xl">
                GET STARTED
            </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
