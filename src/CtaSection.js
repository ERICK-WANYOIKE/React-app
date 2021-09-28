import { Link as ReactLink } from 'react-router-dom';
const CtaSection = () => {
    return ( 
      
      <div className="bg-gray-50 mb-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Get instant quote.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
          <ReactLink className="py-2 px-1 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 " to="/get started">Get started</ReactLink>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
          
          </div>
        </div>
      </div>
    </div>


     );
}
 
export default CtaSection;