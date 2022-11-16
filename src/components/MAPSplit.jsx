

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import MAP_Split from '@/images/MAPsplit.png'
import Image from 'next/image'

export function MAPSplit() {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src={MAP_Split}
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p style = {{fontSize:"36px",fontWeight:"800",fontFamily:"inter"}} className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Got a top-secret project?</p>
          <br></br><p style = {{fontSize:"36px",fontWeight:"800",fontFamily:"inter"}} className="-mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> We
honor the Geek-Bond!</p>
          <p className="mt-3 text-lg text-gray-900">
          Our team of professionals strictly adhere to security and confidentiality requirements. The only details that need to be revealed are the project brief that our Geeks would be working on.
          </p>
        </div>
      </div>
    </div>
  )
}
