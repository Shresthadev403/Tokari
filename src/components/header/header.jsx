import "./header.css";
import tokariLogo from "../../tokariLogo.png";
import Slider from "./slider";
import BottomHeader from "./bottomHeader";
import { useEffect } from "react";
import SearchBar from "./searchBar";

function Header() {

 
  return (
    <div className="header">
      <div className="h-14 p-2  relative z-[100] flex  justify-between bg-black text-white items-center">
        {/* headerleft */}
        {/* for controlling sidebar */}
        <div className=" lg:hidden text-center mr-5 flex items-center">
          <button
            className="text-white"
            type="button"
            data-drawer-target="drawer-disabled-backdrop"
            data-drawer-show="drawer-disabled-backdrop"
            data-drawer-backdrop="false"
            aria-controls="drawer-disabled-backdrop"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="h-14 w-18 flex items-center">
          <img src={tokariLogo} alt="logo" className="object-contain h-10" />
        </div>
        {/* header middle */}
        <div className=" hidden md:block  container mx-auto pl-2 pr-2">
        <SearchBar/>
        </div>


        {/* header right */}
        <div className="flex min-w-max ">
          <div className="flex items-center px-2  w-28 translate-tighter cursor-pointer hover:outline outline-1 outline-white ">
            Returns and Orders
          </div>
          <div className=" flex items-center  px-4  cursor-pointer hover:outline outline-1 outline-white ">
            Sign In
          </div>
          <div className="px-4  flex items-center cursor-pointer hover:outline outline-1 outline-white ">
            <svg
              className="h-8 w-8 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div style={{width:"100%",backgroundColor:"green"}}>
      <BottomHeader />
      </div>

     
      <Slider  />
      
    
   
    
    </div>
  );
}

export default Header;
