import { useState } from "react";


const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const closeDrawer = () => setIsDrawerOpen(false);
  

    return (
        <div>
        {/* Navbar */}
        <div className="navbar bg-black text-white md:px-12 md:py-4">
          <div className="navbar-start">
            {/* logo */}
            <div className="flex items-center md:gap-3 gap-1">
              <svg className="abstract-logo logo md:h-8 md:w-8 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                <g className="abstract-logo-mark" fill="#fff">
                  <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                  <circle cx="21.24" cy="29.58" r="4.96"></circle>
                </g>
              </svg>
              <p className="md:text-2xl text-base font-semibold">Abstract</p>
              <p className="md:text-2xl text-base font-normal">|</p>
              <p className="md:text-2xl text-base font-normal">Help Center</p>
            </div>
          </div>
          <div className="navbar-end">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="hidden lg:flex menu menu-horizontal px-1">
                <button className="btn btn-outline bg-[#191A1B] text-white text-2xl font-normal">
                  Submit a request
                </button>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 bg-black text-white w-full h-[200px] p-4 transition-transform transform ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Help Center</h2>
            <button
              className="text-2xl"
              onClick={closeDrawer}
            >
              &times;
            </button>
          </div>
          <div className="mt-4">
            <button  className="btn btn-outline bg-[#191A1B] text-white text-2xl font-normal">
              Submit a request
            </button>
  
          
          </div>
        </div>
      </div>
     
    );
};

export default Header;