import pyramid from "@/images/pyramid.svg"
export function MAPManagement() {
    return (
      <div style={{borderRadius:'18px', backgroundImage: `linear-gradient(180deg, #1A27C8 0%, #0D1465 100%)`}} className="bg-indigo-700 mx-auto max-w-screen-2xl py-12 px-4 sm:px-6 lg:py-4 lg:px-8 rounded-md border ">
        <div  className="mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Management</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-indigo-200">
          With bi-weekly one on-one-meetings, performance and productivity trackers along with performance evaluations,
        <br></br> we are in contact with our companies and our Geeks throughout every step of the way with ease of payments,
        <br></br> contracts and billing systems just being the cherry on top!          </p>
          <a
            href="#"
            className="mt-12 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[#3300FF] hover:bg-indigo-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>
    )
  }