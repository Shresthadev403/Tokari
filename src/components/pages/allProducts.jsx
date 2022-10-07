import { Route, Routes } from "react-router-dom";
import FilterBar from "../Filterbar/filterBar";
import FilterResult from "../Filterbar/filterResult";


function AllProducts() {
   
    return ( <div>
        <div className="flex">
        <div className="h-screen sticky  top-20">
        <FilterBar/>
        </div>
        <div>
         <FilterResult/>
        </div>
        </div>
       
  
    </div> );
}

export default AllProducts;