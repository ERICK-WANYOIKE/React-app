import { Link as ReactLink } from 'react-router-dom';
const NavBar = () => {
    return ( 

<div className="sticky top-0 bg-black md:h-12">
  <div className="max-w-6xl mx-auto px- py-">
    <div className="flex justify-between">
  
      <div className="flex space-x-20">
        <div className="logo ">
            <div className="logo ">
            <ReactLink classNameNameName="flex py-2 px-4 " to="/">
            <img src="https://finder.createx.studio/img/logo/logo-light.svg" alt=""/>
            </ReactLink>
            </div>
     
        </div>

        <div className=" primary nav serif text-base font-normal text-gray-100  hidden md:flex items-center space-x-4">
            <ReactLink classNameNameName="py-2 px-1" to="/solution">Solutions</ReactLink>
            <ReactLink classNameNameName="py-2 px-1" to="/developers">Developer</ReactLink>
            <ReactLink classNameNameName="py-2 px-1" to="/shipping">Shipping</ReactLink>
            <ReactLink classNameNameName="py-2 px-1" to="/warehousing">Warehousing</ReactLink>
            <ReactLink classNameNameName="py-2 px-1" to="/contact">Contact</ReactLink>

        </div>
      </div>

      
      <div className=" text-gray-100  text-base secondary nav hidden md:flex items-center space-x-4">
        <ReactLink classNameNameName="py-2 px-1" to="/login">Login</ReactLink>
        <button className=" .rounded-tr-lg bg-white py-1 px-3 text-black border-2 border-current hover:bg-green-500 hover:text-white">
        <ReactLink classNameNameName="py-2 px-1 " to="/get started">Get started</ReactLink>
        </button>
   
      </div>

      <div className="  mobile button md:hidden flex items-center bg-white">
        <button className="mobile-menu-button">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>


  <div className="mobile-menu text-base font-normal text-gray-100 hidden md:hidden">
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