const FeatureSection = () => {
    return ( 
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-sm">
          <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-4">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-sm tracking-wider text-green-500 uppercase rounded-full bg-teal-accent-400">
              Our Services
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto text-sm">
            <span className=" inline-block">
                <span className="text-gray-900">Boots 2.0</span>
              </span>{' '}
              Logistics & Supply Chain Solutions 
            </h2>
            <p className=" text-gray-700 md:text-sm">
            Move your international freight with air & ocean shipping
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 row-gap-6 mx-auto lg:grid-cols-2 bg-gray-900 text-white">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row py-6 px-8 ">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img className="w-10 h-10 text-deep-purple-accent-400" src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7AIR%20FREIGHT.svg?la=en-US&hash=9977EBB3764597FA1485411C82EC5433" alt=""/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Air Freight Shipping</h6>
                <p className="mb-3 text-sm text-white">
                Meet deadlines and customer expectations with fast, reliable air freight services—including same day, airport to airport delivery—at all major hubs around the world.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-sm transition-colors duration-200 text-white bg-green-500 py-1 px-4"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row  py-6 px-8">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <img src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7TRUCKLOAD.svg?la=en-US&hash=07CA9C49694DBADEEE122B2FCF5DEAAE" alt=""/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                Truckload
                </h6>
                <p className="mb-3 text-sm text-white">
                Strengthen your supply chain with the power of our scale and reliable truckload capacity in all markets—we move the most full truckload freight (FTL) of any company in the world.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-sm transition-colors duration-200 text-white bg-green-500 py-1 px-4"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row  py-6 px-8">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <img src="https://www.chrobinson.com/en-US/-/media/CHRGlobal/icons-svg/chr-blue-0071c7/CHRICONS6AWBLUE0071C7CUSTOMS.svg?la=en-US&hash=F95C007537A1C37B8E69AE2B57C45F27" alt=""/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                Customs Brokerage & Trade Compliance
                </h6>
                <p className="mb-3 text-sm text-white">
                Maintain control, reduce risk, and keep your freight moving across borders. Easily navigate the complexities of customs compliance with our Trusted Advisor®
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-sm transition-colors duration-200 text-white bg-green-500 py-1 px-4"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row py-6 px-8">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <img src="https://www.fedex.com/content/dam/fedex/us-united-states/freight/images/2020/Q4/icon_ship_side_purple_med.png" alt=""/>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                Ocean Shipping
                </h6>
                <p className="mb-3 text-sm text-white">
                Get reliable ocean delivery along major trade routes into select U.S. ports for your less-than-container-load (LCL) and full-container-load (FCL) shipments.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-sm transition-colors duration-200 text-white bg-green-500 px-4 py-1"
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