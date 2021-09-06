import React from 'react';
const Hero = () => {
  return (
      <div className="heroes h-screen">
          <div className="hero h-screen " style={{ 
            backgroundImage: `url("https://ignasisayol.com/wp-content/uploads/2020/09/la-digitalizaci%C3%B3n-de-la-logistica-1.jpg")` }}>
                <div className="sm:text-center lg:text-left pt-12">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-4xl md:text-4xl">
                      <span className="block xl:inline">Solutions to enrich your</span>
                      <span className="block text-white xl:inline">online business</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Expand across the Middle East and beyond.<span className="text-blue-900">Boots 2.0</span> you covered.</p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow md:pl-2">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-6">
                          Get Quote
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-6">
                          Live demo
                        </a>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
        
    );
}
 
export default Hero;