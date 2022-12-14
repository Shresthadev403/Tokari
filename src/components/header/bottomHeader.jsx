import SearchBar from "./searchBar";
import { Link } from "react-router-dom";

const bottomHeaderItems = [
  "All",
"Popular",
  "Today's Deal",
  "Mobile",
  "Customer Service",
  "Books",
  "Electronics",
  "Fashion",
  "Home and Kitchen",
  "New Release",
  "Computer",
];

function BottomHeader() {
  return (
    <div>
      <div className="hidden lg:flex p-2  relative   justify-between bg-slate-900 text-white items-center">
        {bottomHeaderItems.map((item,index) => {
          if(item=="All"){
            return  <Link key={index} to={`/Products/${item}`}>
            <div className="flex items-center px-2   translate-tighter cursor-pointer hover:outline outline-1 outline-white ">
              {item}
            </div>
          </Link>
          }
          if(item=="Customer Service"){
            return  <Link key={index} to={`/${item.replace(/\s+/g,"")}`}>
            <div className="flex items-center px-2   translate-tighter cursor-pointer hover:outline outline-1 outline-white ">
              {item}
            </div>
          </Link>
          }
          return (
            <Link key={index} to={`/Products/All/${item.replace(/\s+/g, '')}`}>
              <div className="flex items-center px-2   translate-tighter cursor-pointer hover:outline outline-1 outline-white ">
                {item}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="md:hidden w-full ">
        <form>
          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Your Email
            </label>

            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Products"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BottomHeader;
