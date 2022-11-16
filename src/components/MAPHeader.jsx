import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import MAP_Header from '@/images/MAPHeader.svg'
import Image from 'next/image'

const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function MAPHeader() {
  return (

    <main className="lg:relative">
    <div className="mx-auto w-full max-w-screen-2xl text-center lg:py-48 lg:text-left">
      <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
        <h1 style = {{fontSize:"36px",fontWeight:"800",fontFamily:"inter"}} className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
          <span className="block xl:inline">WE HIRE THE PERFECT GEEKS </span>{' '}
          <br></br>
          <span className="block xl:inline"> FOR YOUR POD THROUGH OUR </span>{' '}
          <br></br>
          <span className="block text-[#3300FF] xl:inline">PYRAMID OF SUCCESS!</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-base md:mt-5 md:max-w-3xl">
        1. Our ice-breaking consultation helps us find out exactly what you need<br></br>
2. Our team of geek-detectives hunt and align the perfect Geek for your needs!<br></br>
3. We Schedule your real-time interview at your convenience<br></br>
4. No risks, just innovation! Get a 2 week, risk free trial and hire at your ease!<br></br>
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#3300FF] px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-[#3300FF] hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="relative h-64 w-full sm:h-72 md:h-96 md:w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
      <Image 
        className="absolute  h-full "
        src={MAP_Header}
        alt=""
      />
      <br></br>
    </div>
  </main>
  )
}
