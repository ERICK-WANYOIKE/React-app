import React, { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const CardLanding = () => {
 useEffect(() => {
  AOS.init({duration:300});
 }, []);

    return ( 
      <div data-aos="fade-left" >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-gray-900">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        What Makes Us Different?
        </h2>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <img src="https://www.agility.com/wp-content/uploads/2021/08/icon-global.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold text-gray-900 leading-5">Global supply chain expertise </h6>
            <p className="mb-3 text-sm text-gray-900">
            Global supply chain expertise built over decades in 100+ countrie
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <img src="https://www.agility.com/wp-content/uploads/2021/08/icon-application.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold text-gray-900 leading-5">Emerging markets</h6>
            <p className="mb-3 text-sm text-gray-900">
            Emerging markets know-how and on-the-ground presence
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <img src="https://www.agility.com/wp-content/uploads/2021/08/icon-portfolio.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold text-gray-900 leading-5">High-value assets</h6>
            <p className="mb-3 text-sm text-gray-900">
            High-value assets in high-growth markets & sectors
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <img src="https://www.agility.com/wp-content/uploads/2021/08/icon-sales.svg" alt=""/>
            </div>
            <h6 className="mb-2 font-semibold text-gray-900 leading-5">Digital DNA</h6>
            <p className="mb-3 text-sm text-gray-900">
            Digital DNA and growing portfolio of innovation investments
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
     );
}
 
export default CardLanding;