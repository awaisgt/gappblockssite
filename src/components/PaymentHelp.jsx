import {InboxIcon, SparklesIcon,} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Help from '@/images/help.png'

function CustomerSupport(heading, content, buttonText, buttonLink) {
  return(
      <div className="mt-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{heading}</h2>
        <p className="mt-4 text-lg text-gray-500">
          {content}
        </p>
        <div className="mt-6">
          <a
              href={buttonLink}
              className="inline-flex rounded-md border border-transparent bg-accent bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm"
          >
            {buttonText}
          </a>
        </div>
      </div>
  )
}

export default function PaymentHelp(props) {
  return (
    <>
      <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  {CustomerSupport(props.heading, props.content, props.buttonText, props.buttonLink)}
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Help.src}
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 mt-20">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              <span className="block">Ready to start shipping?</span>
              <span className="block text-accent">Start your own platform today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-5 py-3 text-base font-medium text-white hover:bg-accent"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
        </>
  )
}

export function CustomerSupportPaymentPage(props) {
  return (
      <div className="relative overflow-hidden pt-16 pb-32">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"/>
        <div className="relative">
          <div
              className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                    <span
                        className="flex h-12 w-12 items-center justify-center rounded-md bg-accent">
                      <InboxIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </span>
                </div>
                {CustomerSupport(props.heading, props.content, props.buttonText, props.buttonLink)}
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Help.src}
                    alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}