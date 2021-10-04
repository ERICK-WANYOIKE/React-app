import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-20 lg:flex-row md:px-8 lg:max-w-screen-xl ">
    <div className="pt-16 mb-16 lg:mb-0 lg:pt-20 lg:max-w-lg lg:pr-5">
      <div className="max-w-xl mb-6">
        <div>
        </div>
        <h2 className="max-w-lg mb-2 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Boost . Delivery  for
          <br className="hidden md:block" />
         {' '}
          <span className="inline-block text-deep-purple-accent-400">
          Ecommerce.
          </span>
        </h2>
        <p className="text-sm font-sans text-gray-500 md:text-sm">
        Take advantage of our services and solutions designed to meet all of your shipping requirements. 
        Sign up for a Boost shipping account below. Let’s get started!
        </p>
      </div>
      <div className="flex items-center">
      <ReactLink className="inline-flex items-center justify-center py-2 px-6 mr-6 font-base text-sm text-white rounded shadow-md bg-blue-600 hover:bg-blue-700 " to="/get started">Get started</ReactLink>
      <ReactLink className=" inline-flex items-center justify-center py-2 px-6 mr-6 font-base text-sm text-black rounded shadow-md bg-gray-50 hover:bg-gray-200 " to="/learn more">Learn more</ReactLink>
      </div>
    </div>
    <div>
      <img
        src="https://static-cse.canva.com/_next/static/assets/header.667x443.717df78e91f51057dfd818ac39680c39.png"
        className="object-cover object-top w-full h-100 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
        alt=""
      />
    </div>
  </div>

    );
}
 
export default Hero;

