const FeatureSection = () => {
    return ( 
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-600 uppercase rounded-full bg-teal-accent-400">
              Our Services
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className=" inline-block">
                <span className="text-gray-900">Boots 2.0</span>
              </span>{' '}
              Logistics & Supply Chain Solutions 
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Move your international freight with air & ocean shipping
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img className="w-10 h-10 text-deep-purple-accent-400" src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7AIR%20FREIGHT.svg?la=en-US&hash=9977EBB3764597FA1485411C82EC5433" alt=""/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Air Freight Shipping</h6>
                <p className="mb-3 text-sm text-gray-900">
                Meet deadlines and customer expectations with fast, reliable air freight services—including same day, airport to airport delivery—at all major hubs around the world.
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
                <img src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7TRUCKLOAD.svg?la=en-US&hash=07CA9C49694DBADEEE122B2FCF5DEAAE" alt=""/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                Truckload
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                Strengthen your supply chain with the power of our scale and reliable truckload capacity in all markets—we move the most full truckload freight (FTL) of any company in the world.
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
                  <img src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7CUSTOMS.svg?la=en-US&hash=F95C007537A1C37B8E69AE2B57C45F27" alt=""/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                Customs Brokerage & Trade Compliance
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                Maintain control, reduce risk, and keep your freight moving across borders. Easily navigate the complexities of customs compliance with our Trusted Advisor® experts—we stay up to date on global trade laws and regulations, so you don’t have to.
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
                <img src="https://www.fedex.com/content/dam/fedex/us-united-states/freight/images/2020/Q4/icon_ship_side_purple_med.png" alt=""/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                Ocean Shipping
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                Get reliable ocean delivery along major trade routes into select U.S. ports for your less-than-container-load (LCL) and full-container-load (FCL) shipments.
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