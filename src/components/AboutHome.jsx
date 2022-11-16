import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Abouthome1 from "@/images/abouthome1.svg"
import Image from 'next/image'

export function AboutHome() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
                  <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#3300FF]">
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">What is Geekspod, you ask?</h2>
                <p className="mt-4 text-lg text-gray-500">
                We put together remote teams of engineers, consultants for your projects. Whether you&#39;re a start-up or a full-fledged corporation, we’ve got the right people to get you started. 
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-md border border-transparent bg-[#3300FF] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <Image 
         
                src={Abouthome1}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
