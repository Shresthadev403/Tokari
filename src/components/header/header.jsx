import "./header.css";
import tokariLogo from "../../newlogo.png";
import Slider from "./slider";
import BottomHeader from "./bottomHeader";
import { useEffect } from "react";
import SearchBar from "./searchBar";
import { Link } from "react-router-dom";




function Header(props) {
const {setViewMode,viewMode}=props;
const toggleDarkMode=(e)=>{
if(e.target.value=="light"){
  setViewMode('dark');
}else{
  setViewMode("light");
}
}
  
  return (
    <div className="header sticky top-0  z-[100] ">
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
          <Link to="/">
            <img src={tokariLogo} alt="logo" className="object-contain h-20 w-80 " />
          </Link>
        </div>
        {/* header middle */}
        <div className=" hidden md:block  container mx-auto pl-2 pr-2">
          <SearchBar />
        </div>

        {/* header right */}
        <div className="flex min-w-max ">
          <Link to={"/Dashboard"} className="flex items-center ">
            <div className="hidden lg:flex  items-center  px-4 pt-2 pb-2  cursor-pointer hover:outline outline-1 outline-white ">
              Dashboard
            </div>
          </Link>

          <div className=" flex lg:flex gap-2 items-center px-2  w-28 translate-tighter cursor-pointer hover:outline outline-1 outline-white ">
            Mode
          
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={viewMode==="dark"?true:false}
                  defaultValue={viewMode}
                  id="default-toggle"
                  className="sr-only peer"
                  onChange={toggleDarkMode}

                />
               
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              </label>
          
          </div>
          <Link to={"/SignIn"} className="flex items-center">
            <div className=" flex items-center  px-4 pt-2 pb-2   cursor-pointer hover:outline outline-1 outline-white ">
              Sign In
            </div>
          </Link>

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

      <div style={{ width: "100%", backgroundColor: "green" }}>
        <BottomHeader />
      </div>

      <Slider />
    </div>
  );
}

export default Header;
