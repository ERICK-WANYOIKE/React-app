const FeatureSection = () => {
    return ( 
      /*<div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Logistics & Supply Chain Solutions 
          </p>
          <p class="mt-4 max-w-2xl text-xl text-black lg:mx-auto">
          Move your international freight with air & ocean shipping
          </p>
        </div>
    
        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="cardOne">
              <dt>
                <div class=" flex items-center justify-center h-12 w-12 rounded-md bg-white">
                 <img src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7AIR%20FREIGHT.svg?la=en-US&hash=9977EBB3764597FA1485411C82EC5433" alt=""/>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Air Freight Shipping</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-black">
              Meet deadlines and customer expectations with fast, reliable air freight services—including same day, airport to airport delivery—at all major hubs around the world.
              </dd>
            </div>
    
            <div class="CardTwo">
              <dt>
                <div class=" flex items-center justify-center h-12 w-12 rounded-md bg-white ">
                  <img src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7TRUCKLOAD.svg?la=en-US&hash=07CA9C49694DBADEEE122B2FCF5DEAAE" alt=""/>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Truckload</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-black">
              Strengthen your supply chain with the power of our scale and reliable truckload capacity in all markets—we move the most full truckload freight (FTL) of any company in the world.
              </dd>
            </div>
    
            <div class="CardThree">
              <dt>
                <div class=" flex items-center justify-center h-12 w-12 rounded-md bg-white">
                 <img src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7CUSTOMS.svg?la=en-US&hash=F95C007537A1C37B8E69AE2B57C45F27" alt=""/>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Customs Brokerage & Trade Compliance</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-black">
              Maintain control, reduce risk, and keep your freight moving across borders. Easily navigate the complexities of customs compliance with our Trusted Advisor® experts—we stay up to date on global trade laws and regulations, so you don’t have to.
              </dd>
            </div>
    
            <div class="CardFour">
              <dt>
                <div class=" flex items-center justify-center h-12 w-12 rounded-md bg-white">
                 <img src="https://www.fedex.com/content/dam/fedex/us-united-states/freight/images/2020/Q4/icon_ship_side_purple_med.png" alt=""/>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Ocean Shipping</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-black">
              Get reliable ocean delivery along major trade routes into select U.S. ports for your less-than-container-load (LCL) and full-container-load (FCL) shipments.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>*/
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
                <span className="relative">The</span>
              </span>{' '}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">The deep ocean</h6>
                <p className="mb-3 text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack never
                  stopped old Big Bear. I didn't even know we were calling him Big
                  Bear. We never had the chance to.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  When has justice
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Rough pomfret lemon shark plownose chimaera southern sandfish
                  kokanee northern sea robin Antarctic cod. Yellow-and-black
                  triplefin gulper South American Lungfish mahi-mahi, butterflyfish
                  glass catfish soapfish ling gray mullet!
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Organically grow
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  A slice of heaven. O for awesome, this chocka full cuzzie is as
                  rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                  Hercules Morse, as big as a horse and Mrs Falani were up to no
                  good with a bunch of crook pikelets.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  A slice of heaven
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling. Inspiring, invest
                  synergy capacity building, white paper; silo, unprecedented
                  challenge B-corp problem-solvers.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
  
     );
}
 
export default FeatureSection;