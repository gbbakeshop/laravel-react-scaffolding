export default function HomeSectionSocials() {
    return (
      <div className="bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            My Social Media
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <a href="https://www.facebook.com/eron.kun/" target="_blank">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            </a>
            <a href="https://ph.linkedin.com/in/marlou-pepito-40911a1ba?trk=people-guest_people_search-card" target="_blank">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://seeklogo.com/images/T/twitter-logo-C591CF37A1-seeklogo.com.png"
              alt="Reform"
              width={158}
              height={48}
            />
            </a>
            <a href="https://twitter.com/marloupepito" target="_blank">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            </a>
           <a href="https://github.com/marloupepito" target="_blank">
           <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
           </a>
          </div>
        </div>
      </div>
    )
  }
  