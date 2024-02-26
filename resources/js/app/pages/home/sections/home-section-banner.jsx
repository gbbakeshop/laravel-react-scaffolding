export default function HomeSectionBanner() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Marlou Flores Pepito
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              “The capacity to learn is a gift; The ability to learn is a skill; The willingness to learn is a choice.”
              </p>
              <div className="text-2xl text-gray-700">
              ~ Brian Herbert ~
              </div>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-48 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="/images/cover1.jpg"
                            alt=""
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="h-48 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/images/cover2.jpg" alt=""
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-48 w-44 overflow-hidden rounded-lg">
                          <img
                             src="/images/cover3.jpg" alt=""
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="h-48 w-44 overflow-hidden rounded-lg">
                          <img
                             src="/images/cover4.jpg" alt=""
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="h-48 w-44 overflow-hidden rounded-lg">
                          <img
                             src="/images/cover5.jpg"alt=""
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-48 w-44 overflow-hidden rounded-lg">
                          <img
                             src="/images/cover6.jpg"alt=""
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="h-48 w-44 overflow-hidden rounded-lg">
                          <img
                             src="/images/cover7.jpg"alt=""
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                target="_blank"
                  href="/files/Marlou-Pepito.pdf"
                  className="inline-block rounded-md border border-transparent bg-purple-900 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  