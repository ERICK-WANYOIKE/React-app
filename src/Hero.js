import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gray-900"
    style={{ 
      backgroundImage: `url("")` 
    }}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className=" max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-blue-500">
              You grow your business 
              <span className="text-white">
              We'll take care of the logistics
              </span>
    
              </h2>
              <p className="text-base text-gray-200 md:text-lg">
              As the world of commerce is changing, it's time to change your business with it. Move your logistics service from offline to online.
               With Boots, booking, tracking and managing your shipments is easy.
              </p>
            </div>
           <div>
           <ReactLink className="inline-flex rounded-full items-center justify-center h-12 px-6 font-semibold tracking-wide text-gray-100 transition duration-200 rounded shadow-md hover:text-text-gray-300 bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none" to="/get started">Get started</ReactLink>
           </div>
          </div>
        </div>
      </div>
    </div>
    );
}
 
export default Hero;