import { Link as ReactLink } from 'react-router-dom';
import React, {useState} from 'react';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

      return ( 
        
        <div className=" fixed sticky bg-black top-0 ">
        <div class="px-2 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
              <ReactLink className="inline-flex items-center mr-8" to="/">
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
            <span className= "ml-2 text-xl font-bold tracking-wide text-gray-100">
            Bouts
              </span>
              </ReactLink>



            <ul class=" primary nav flex items-center hidden space-x-4 lg:flex text-white
               text-sm font-normal">
              <ReactLink className="py-2 px-1" to="/solution">Solutions</ReactLink>
              <ReactLink className="py-2 px-1" to="/docs">Docs</ReactLink>
              <ReactLink className="py-2 px-1" to="/Platform">Platform</ReactLink>
              <ReactLink className="py-2 px-1" to="/track">Track</ReactLink>
              <ReactLink className="py-2 px-1" to="/contacts">Contact</ReactLink>
            </ul>
          </div>

          <ul class="  secondary nav flex items-center hidden space-x-4 lg:flex
          serif text-sm font-normal">
              <ReactLink className="py-2 px-1 text-blue-200" to="/login">Login</ReactLink>
              <button className="rounded-full bg-black py-2 px-3 bg-red-600 hover:bg-red-700 ">
              <ReactLink className="py-2 px-1 text-white font-semibold " to="/get started">Get started</ReactLink>
              </button>
          </ul>


          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                        <ReactLink className="inline-flex items-center mr-8" to="/">
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
                      <span className= "ml-2 text-xl font-bold tracking-wide text-gray-800">
                      Bouts
                        </span>
                        </ReactLink>

                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="black"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <nav className="mobile-menu">
                    <ul class="space-y-4 ">
                        <ReactLink className="list-item" to="/solution">Solutions</ReactLink>
                        <ReactLink className="list-item" to="/docs">Docs</ReactLink>
                        <ReactLink className="list-item" to="/Platform">Platform</ReactLink>
                        <ReactLink className="list-item" to="/track">Track</ReactLink>
                        <ReactLink className="list-item" to="/contacts">Contact</ReactLink>
                        <ReactLink className=" list-item text-blue-900" to="/login">Login</ReactLink>
                        <button className="rounded-full bg-black py-2 px-3 bg-red-600 hover:bg-red-700 ">
                        <ReactLink className="py-2 px-1 text-white font-semibold " to="/get started">Get started</ReactLink>
                        </button>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
           </div>
         </div>
        </div>
      </div>
     
    );
}
 
export default NavBar;