import React, { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const FeatureSection = () => {
 
 useEffect(() => {
  AOS.init({duration:300});
 }, []);
    return ( 
    <div >
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 overflow-hidden">
      <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold text-gray-900 lg:text-2xl  ">
           Logistics solutions
          </p>
        </div>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center"> 
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
               <img  src="https://saglogistic.com/wp-content/uploads/2019/09/sag-service-icons-01-150x150.png" alt=""/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-gray-900 font-semibold text-lg">
              Air Freight
              </h6>
              <p className="text-sm text-gray-900">
              Our wide range of cost effective flexible airfreight solutions makes us committed 
              to provide the highest quality of customer service and the best value for money.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <img src="https://saglogistic.com/wp-content/uploads/2019/09/sag-service-icons-02-150x150.png" alt=""/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-gray-900 font-semibold text-lg">
               Sea Freight
              </h6>
              <p className="text-sm text-gray-900">
              We offer a complete range of ocean-freight services for all types of cargo and customer specific requirements
               ensuring door-to-door delivery of your cargo from / to most of the world's ports
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <img src="https://saglogistic.com/wp-content/uploads/2019/09/sag-service-icons-03-150x150.png" alt=""/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold text-gray-900">
               Land Transpotation
              </h6>
              <p className="text-sm text-gray-900">
              As a specialist in transportation and distribution industry, Allianz Cargo provides
               tailor-made service solutions for all your dedicated trucking needs.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
          data-aos="fade-left"
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/1098745/pexels-photo-1098745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
            alt=""
          />
          <img
          data-aos="fade-right"
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3075996/pexels-photo-3075996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
            alt=""
          />
          <img
          data-aos="fade-left"
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/2348359/pexels-photo-2348359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
     );
}
 
export default FeatureSection;