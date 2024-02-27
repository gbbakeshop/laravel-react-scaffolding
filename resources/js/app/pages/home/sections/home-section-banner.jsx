export default function HomeSectionBanner() {
  return (
    <div className="flex bg-white h-[90vh] mb-12">
      <div className="flex-1 pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 basis-3/5">
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
      <div className="flex-1  basis-2/5">
        <img
          src="/images/cover6.jpg" alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  )
}
