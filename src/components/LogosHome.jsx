import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import logo1 from "@/images/logos/logo1.svg"
import logo2 from "@/images/logos/logo2.svg"
import logo3 from "@/images/logos/logo3.svg"
import logo4 from "@/images/logos/logo4.svg"
import logo5 from "@/images/logos/logo5.svg"
import logo6 from "@/images/logos/logo6.svg"
import logo7 from "@/images/logos/logo7.svg"
import Image from 'next/image'

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function LogosHome() {
  return (
    <div className="bg-white">


          {/* Logo cloud */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image className="h-12" src={logo1}  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image src={logo2}  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image 
                    className="h-12"
                    src={logo3} 
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <Image 
                    className="h-12"
                    src={logo4} 
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <Image 
                    className="h-12"
                    src={logo5} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}
