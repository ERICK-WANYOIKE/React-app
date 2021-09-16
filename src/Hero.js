import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gray-900"
    style={{ 
      backgroundImage: `url("https://www.teahub.io/photos/full/126-1268864_cabling-connell-communications-darkness.jpg")` 
    }}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className=" max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              You grow your business
              <span className="text-indigo-700">
              We'll take care of the logistics
              </span>
              </h2>
              <p className="text-base text-black md:text-lg">
              As the world of commerce is changing, it's time to change your business with it. Move your logistics service from offline to online.
               With Boots, booking, tracking and managing your shipments is easy.
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-black transition duration-200 rounded shadow-md hover:text-green bg-white hover:bg-deep-green focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    );
}
 
export default Hero;