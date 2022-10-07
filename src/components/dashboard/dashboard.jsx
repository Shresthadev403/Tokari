

import DashboardSidebar from "./dashboardSidebar";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kanban from "./Kanban";
import OverView from "./overview";
import Users from "./users";
import Products from "./products";
import Orders from "./orders";







function Dashboard() {





  return (  
    <div className=" flex">
      <div className="h-screen sticky  top-20" >
      <DashboardSidebar/>
      </div>
    
     
      <div className="w-full dark:bg-gray-700">
      <Routes>
     
        <Route exact path="Kanban" element={<Kanban/>}></Route>
        <Route exact path="Users" element={<Users/>}></Route>
        <Route exact path="Products" element={<Products/>}></Route>
        <Route exact path="Orders" element={<Orders/>}></Route>
        <Route exact path="/" element={<OverView/>}></Route>
      </Routes>
      </div>
     
    </div>
  );
}

export default Dashboard;
