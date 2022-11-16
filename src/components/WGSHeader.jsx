

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import MAP_Split from '@/images/MAPsplit.png'
import WSGHeaderImg from '@/images/WSGHeader.png'
import Image from 'next/image'

export function WGSHeader() {
  return (
    <div style={{ backgroundImage: `linear-gradient(180deg, #1A27C8 0%, #0D1465 100%)`}} className="relative bg-indigo-600">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image layout='fill'
          className="h-full w-full object-cover"
          src={WSGHeaderImg}
          alt=""
        />
      </div>
      <div  className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p  style = {{fontSize:"30px",fontWeight:"800",fontFamily:"inter",lineHeight:'36px'}} className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Have an up-&-running organization,</p>
          <p style = {{fontSize:"30px",fontWeight:"800",fontFamily:"inter"}} className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"> or an up-&-coming startup that&apos;s </p>
          <p style = {{fontSize:"30px",fontWeight:"800",fontFamily:"inter"}} className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">ready to disrupt the competition?</p>
          <p className="mt-3 text-lg text-gray-300">
          You&apos;ll need a team that aligns with your goals. Well,we are here to help. Our vetting and scrutiny processes make sure that we hire the perfect geeks for you! so that all that&apos;s left for you to do, is consult us.
          </p>
          <br></br>
          <div className="mt-8">
          </div>
        </div>
      </div>
    </div>
  )
}
