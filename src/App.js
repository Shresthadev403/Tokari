import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { useEffect, useState } from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home/home';
import Pages from './components/pages/pagesRoutes';
import Dashboard from './components/dashboard/dashboard';
import AllProducts from './components/pages/allProducts';
import CustomerService from './components/pages/customerService';
import MainRouter from './mainRouter';



function App() {





  useEffect(() => {
    const chartJsScript=document.createElement('script');
    chartJsScript.src="https://cdn.jsdelivr.net/npm/chart.js";
    chartJsScript.async=true;
    const script = document.createElement('script');
    script.src = "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js";
    script.async = true;
    document.body.appendChild(chartJsScript);
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
      document.body.removeChild(chartJsScript);
    }
  }, []);

const toggleDarkMode=()=>{
  
}

  

  return (
    
       <div  className=' relative w-full' >
       
        <Header/>
        <MainRouter/>
  
    </div>
  
   
  );
}

export default App;
