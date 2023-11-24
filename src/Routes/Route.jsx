import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import { Children } from "react";
import Home from "../Pages/Home/Home/Home";
import JoinEmployee from "../Pages/EmployeePage/JoinEmployee";
import Login from "../Pages/Login/Login";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/joinEmployee',
            element:<JoinEmployee></JoinEmployee>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
   
  ]);

  export default router;