import React from 'react';


const Hero = () => {
  return (
  <div className="heroes">
      <div className="hero-image"
      style={{ 
        backgroundImage: `url(https://www.shipafreight.com/static/caf79029ac4fa9f6da2c1c562a8ef0a3/48f22/d2b8adb1f19215927437a598cb800d36.jpg)` 
      }}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              <span className=" inline-block">
                <span className="header">The</span>
              </span>{' '}
              Book your freight. Get an <span className="text-yellow-700"> instant quote online.</span> 
            </h2>
            <p className="text-sm text-gray-100 md:text-lg">
            Ship air & ocean freight. Get your instant quote online, book, and pay in just a few steps.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-full inline-flex items-center justify-center  mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-sm"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 sm:px-0 text-sm">
        <div className="absolute insert-0 bg-gray-100 h-1/2" />
        <div className=" grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 full bg-indigo-50"
             style={{ 
        backgroundImage: `url(https://dsv-media-premium.azureedge.net/~/media/corporate/spots/icons/blue-icons/xpress-courier.png?rev=78ec2a828b0841d3bccc69c2675166a0&w=96)` 
               }}>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              when time matters
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center  w-24 h-24 mx-auto mb-4 full bg-indigo-50" 
              style={{ 
            backgroundImage: `url(https://dsv-media-premium.azureedge.net/~/media/corporate/spots/icons/blue-icons/xpress-economy.png?rev=9a4ed24b68d24d07bd3632990d3c382c&w=96)` 
               }}>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
             When cost matters
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center  w-24 h-24 mx-auto mb-4 full bg-indigo-50"
             style={{ 
             backgroundImage: `url(https://dsv-media-premium.azureedge.net/~/media/corporate/spots/icons/blue-icons/xpress-special.png?rev=40cd8fa438074a2d82c14e6f198a85b6&w=96)` 
               }}>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              When its critical
            </p>
          </div>
        </div>
      </div>
    </div>
    
      
    );
}
 
export default Hero;