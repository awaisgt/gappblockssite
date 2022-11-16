import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import POD_Background from '@/images/POD-bg.jpg'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export function HeaderHome() {
  return (
<div className="relative overflow-hidden ">
      <main >
        <div style={{ 
      backgroundImage: `url(${POD_Background.src})`,
  
      
        }} className="bg-cover">
        
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-80">
                  <h1 className="lg:-mt-20 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl xl:text-6xl">
                    <span className="block">BUILD YOUR DREAM</span>
                    <span className="block">ENGINEERING TEAM</span>
                  </h1>
                  <p className="lg:mt-22 text-base text-white sm:mt-6 sm:text-2xl lg:text-2xl xl:text-2xl">
                 We&apos;re bringing the global village <br></br>
                 of developers and genuises <br></br>
                 to your doorstep!
                  </p>
                

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}