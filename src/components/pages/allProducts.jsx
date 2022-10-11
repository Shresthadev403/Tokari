import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FilterBar from "../Filterbar/filterBar";
import FilterResult from "../Filterbar/filterResult";


const  categoryList= [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    "Books",
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Outdoor',
    'Home'
  ]

function AllProducts() {
    const [activeCategory,setActiveCategory]=useState("All");

   
    return ( <div>
        <div className="flex">
        <div className="h-screen sticky  top-20">
        <FilterBar 
        categoryList={categoryList}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
    />
        </div>
        <div>
         <FilterResult/>
        </div>
        </div>
       
  
    </div> );
}

export default AllProducts;