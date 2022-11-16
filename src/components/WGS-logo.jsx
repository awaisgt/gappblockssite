import logo1 from "@/images/logos/logo1.svg"
import logo2 from "@/images/logos/logo2.svg"
import logo3 from "@/images/logos/logo3.svg"
import logo4 from "@/images/logos/logo4.svg"
import logo5 from "@/images/logos/logo5.svg"
import logo6 from "@/images/logos/logo6.svg"
import logo7 from "@/images/logos/logo7.svg"
import logo8 from "@/images/logos/logo8.svg"
import logo9 from "@/images/logos/logo9.svg"
import Image from 'next/image'

export function WGS_logo() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p style = {{fontSize:"36px",fontWeight:"800",fontFamily:"inter"}} className="text-center text-lg font-bold text-[#000000]">
          OUR GEEKS CAN BE FOUND AT
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image 
                className="max-h-12"
                src={logo1}
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image className="max-h-12" src={logo2} />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image className="max-h-12" src={logo3}  alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image  className="max-h-12" src={logo4} />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image 
                className="max-h-12"
                src={logo5}
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image 
                className="max-h-12"
                src={logo6}
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image className="max-h-12" src={logo7} />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image 
                className="max-h-12"
                src={logo8}
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <Image 
                className="max-h-12"
                src={logo9}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }