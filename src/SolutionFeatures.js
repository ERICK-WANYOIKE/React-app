import { Link as ReactLink } from 'react-router-dom';
const SolutionFeatures = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
        Explore your options
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://dsv-media-premium.azureedge.net/~/media/corporate/spots/images/adobestock_269251333_1250x703.jpg?rev=981c7c72bd0545fa92f1c45154bcc1b4&w=625"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          <ReactLink classNameNameName="py-2 px-1" to="/airfreight">Air Frieght</ReactLink>
          </h5>
          
          <p className="text-gray-700">
            when time and speed matter most
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://dsv-media-premium.azureedge.net/~/media/corporate/spots/images/sea_adobestock_196649218_1250x703.jpg?rev=1d1c458f1b3a4ca3ae04550632998ba2&w=625"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          <ReactLink classNameNameName="py-2 px-1" to="/seafrieght">Sea freight </ReactLink>
          </h5>
          <p className="text-gray-700">
            when cost matters and time is not an issue
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://dsv-media-premium.azureedge.net/~/media/corporate/spots/images/road_adobestock_152518346_1250x703.jpg?rev=72a2e3ee9af04fbdb0834bf5588db3a8&w=625"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          <ReactLink classNameNameName="py-2 px-1" to="/solution">road transport</ReactLink>
          </h5>
          <p className="text-gray-700">
           Local , long distance ,national or international
          </p>
        </div>
      </div>
    </div>

  
      );
}
 
export default SolutionFeatures;