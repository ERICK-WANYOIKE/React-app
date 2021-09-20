import { Link as ReactLink } from 'react-router-dom';
const NavBar = () => {
    function handleSubmit(e) {
      e.preventDefault();
      alert('Hello, world!');
    }
      return ( 
  <div className=" fixed sticky bg-black top-0  z-index: 99 overflow-hidden overscroll-contain transition: 0.4s  ">
    <div className="max-w-6xl mx-auto px- py-">
      <div className="flex justify-between">
    
        <div className="flex space-x-20">
          <div className="logo ">
              <div className="flex space-x-2">
              <ReactLink className="flex items-center py-5 px-2  py-2 px-4  " to="/">
              <svg
              className="w-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className= " inline-block ml-2 text-2xl  font-bold tracking-wide text-base text-gray-100 ">
             Boots
              </span>
              </ReactLink>
              </div>
       
          </div>
  
          <div className=" primary nav serif text-sm font-normal font-family: 'Hina Mincho', serif; text-gray-100 hidden md:flex items-center space-x-4">
              <ReactLink classNameNameName="py-2 px-1" to="/solution">Solutions</ReactLink>
              <ReactLink classNameNameName="py-2 px-1" to="/docs">Docs</ReactLink>
              <ReactLink classNameNameName="py-2 px-1" to="/Platform">Platform</ReactLink>
              <ReactLink classNameNameName="py-2 px-1" to="/track">Track</ReactLink>
              <ReactLink classNameNameName="py-2 px-1" to="/contacts">Contact</ReactLink>
  
          </div>
        </div>
  
        
        <div className="text-gray-100 text-sm secondary nav hidden md:flex items-center space-x-4">
          <ReactLink classNameNameName="py-2 px-1" to="/login">Login</ReactLink>
          <button className="rounded-full bg-black py-2 px-3 bg-red-500 hover:bg-red-700 ">
          <ReactLink className="py-2 px-1 " to="/get started">Get started</ReactLink>
          </button>
     
        </div>
  
        <div className="  mobile button md:hidden flex items-center">
      <button className="mobile-menu-button outline-none bg-white mr-2 " onClick={handleSubmit} >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
  
      </div>
    </div>
  
    <div className="mobile-menu text-sm font-normaltext-gray-10 hidden md:hidden">
      <ReactLink classNameNameName="py-2 px-1" to="/solution">Solutions</ReactLink>
      <ReactLink classNameNameName="py-2 px-1" to="/developers">Developer</ReactLink>
      <ReactLink classNameNameName="py-2 px-1" to="/Ecosystem">Shipping</ReactLink>
      <ReactLink classNameNameName="py-2 px-1" to="/warehousing">Warehousing</ReactLink>
      <ReactLink classNameNameName="py-2 px-1" to="/contact">Contact</ReactLink>
      </div>
  </div>
    );
}
 
export default NavBar;