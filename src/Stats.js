const Stats = () => {
    return ( 
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-200 text-sm">
      <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
        <div className="grid gap-8 lg:col-span-2">
          <div>
            <p className="mb-2 text-lg font-bold text-black">Our <span className="text-green-600"> Businesses </span></p>
            <p className="text-gray-700">
            Boots is a pioneer in emerging markets. We build logistics parks, offer digitally-enabled freight forwarding,
             ecommerce logistics and last-mile delivery, fuel logistics, airport services, customs digitization, remote site services, and commercial real estate and facilities management.
            </p>
          </div>
          <div>
            <p className="mb-2 text-lg font-bold text-black">Our <span className="text-green-600">Investments</span></p>
            <p className="text-gray-700">
            Boots invests in companies that are transforming the supply chain.
               We focus on logistics and transportation, industrial real estate, and technologies and partnerships that drive innovation in e-commerce enablement,
              online freight, sustainable transport, and more.
            </p>
          </div>
        </div>
        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x bg-gray-900 ">
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-white sm:text-base">
                 Happy Customers
              </p>
              <p className="text-2xl font-bold text-white sm:text-xl">
                1000+

              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white sm:text-base">
                 Shipments Delivered
              </p>
              <p className="text-2xl font-bold text-white sm:text-xl">
                150,000+
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white sm:text-base">
                Success Rate
              </p>
              <p className="text-2xl font-bold text-white sm:text-xl">
              99%
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-white sm:text-base">
                Users
              </p>
              <p className="text-2xl font-bold text-white sm:text-xl">
                86K
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white sm:text-base">
               Dedicated Employees
              </p>
              <p className="text-2xl font-bold text-white sm:text-xl">
               100%
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white sm:text-base">
               Technology
              </p>
              <p className="text-2xl font-bold text-white sm:text-xl">
              Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Stats;