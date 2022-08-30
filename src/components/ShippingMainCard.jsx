/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
  BoltIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]
const navigation = [
  { name: 'Pricing', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Company', href: '#' },
]
const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: EnvelopeIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ShippingMainCard() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-accent mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Start Shipping Today!</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  With one of our many blocks, you can easily integrate your default shipping methods such as GAPP Finder, Fed-Ex, UPS and Uber Eats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500">
                Choose Your Preferred Way of Payment
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
          <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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
              <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                A better way to ship Products 
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
              Shipping is a crucial part of your business, so we made sure shipping with GAPP Blocks is simple.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Start Now</h3>
                <p className="mt-3 text-lg text-gray-500">
                  Your GAPP Blocks account comes equipped with shipping capabilities so you can get started sending orders out as soon as you receive them. With easily modifiable defaults, you can charge consumers the right amount for shipping every time. 
                </p>
              </div>

              <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                <svg
                  className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                </svg>
                <img
                  className="relative mx-auto"
                  width={490}
                  src="https://tailwindui.com/img/features/feature-example-1.png"
                  alt=""
                />
              </div>
            </div>

            <svg
              className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Works Seamlessly with GAPP Finder </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    With all online orders running through our platform, GAPP Blocks enables the sharing of customer orders between the GAPP Finder system for local deliveries and with 3rd-party logistics for distant deliveries. 
                  </p>
                </div>

                <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                  <svg
                    className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                    width={784}
                    height={404}
                    fill="none"
                    viewBox="0 0 784 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                  </svg>
                  <img
                    className="relative mx-auto"
                    width={490}
                    src="https://tailwindui.com/img/features/feature-example-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">All in One Place</h3>
                <p className="mt-3 text-lg text-gray-500">
                  Shipping your products to customers is one of the most critical parts of your business. With GAPP Blocks, you can manage your items, customers and inventory all from the same location, which will make your day-to-day operations much simpler. 
                </p>
              </div>

              <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                <svg
                  className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                </svg>
                <img
                  className="relative mx-auto"
                  width={490}
                  src="https://tailwindui.com/img/features/feature-example-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* More main page content here... */}
      </main>
    </div>
  )
}