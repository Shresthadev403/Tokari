import { useState } from "react";
import Select from "react-select";


const categoryList = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  
const options=[
    {value:"Electronics",label:"Electronics"},
    {value:"All",label:"All"},
    {value:"Computer",label:"Computer"},
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    {value:"Computer",label:"Computer"},
    
    
  ]
  const customStyles = {
    container: provided => ({
      ...provided,
      width: "fit-content"
    }),
    // singleValue: provided => ({
    //     ...provided,
    //     width: "1000px"
    //   }),
    placeholder: (provided) => ({
        ...provided,
        position: 'static',
        transform: 'none',
      }),
      singleValue: (provided) => ({
        ...provided,
        position: 'static',
        transform: 'none',
      }),

  };

//   const customStyles = {
//     option: (provided, state) => ({
//       ...provided,

//       color: "blue",
//       padding: 20,
//       width:"max-content"
//     }),
//     control: () => ({
//       // none of react-select's styles are passed to <Control />
//       width: 100,
//     }),
//     // singleValue: (provided, state) => {
//     //   const opacity = state.isDisabled ? 0.5 : 1;
//     //   const transition = 'opacity 300ms';
  
//     //   return { ...provided, opacity, transition };
//     // }
//   }
 


function CustomerService() {
    const[category,setCategory]=useState("All");
    const handleCategoryChange=(item)=>{
        setCategory(item.value);
        console.log(item.value);
       }
    return ( <div >
        CustomerService
        <Select 
        styles={customStyles}
        
        value={{label:category}}
        onChange={handleCategoryChange}
                options={options}
                />
               
    </div> );
}

export default CustomerService;