const DocsContent = () => {
    return ( 
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Boots 2.o 
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
           
          How Boots works
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          We take care of the shipping part of your business.
          So you’re free to focus on growing your company.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://www.twill.net/gatsby_assets/static/43f7d424516dcaaccc0c920de1b1d782/Twill_illustrations-04.svg"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://www.twill.net/gatsby_assets/static/f0b52f69d90f12d9982a7e712cdb024a/Twill_illustrations-03.svg"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://www.twill.net/gatsby_assets/static/43f7d424516dcaaccc0c920de1b1d782/Twill_illustrations-04.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
              Create an account
              </h6>
              <p className="text-sm text-gray-900">
              It’s free and doesn’t take long.

              Tell us a little bit about yourself and your business and
              you’re all set to start booking your shipments.
              </p>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
              Compare shipment rates
              </h6>
              <p className="text-sm text-gray-900">
              Find dates and rates that suit your needs.

              With detailed insights into shipment routes and transparent pricing, 
              you’re empowered to make the best shipping decisions. You can even choose a monthly fixed rate.
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
              Book your shipment
              </h6>
              <p className="text-sm text-gray-900">
              Book your shipment in just a few steps.

              Tell us about your cargo and buyer or supplier. Choose any of our optional services,
               like customs clearance. Then hit ‘book’ and we’ll get to work for you.
              
              
              </p>
            </div>
          </div>
        </div>
      </div>
    
     );
}
 
export default DocsContent;