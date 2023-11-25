import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import { Children } from "react";
import Home from "../Pages/Home/Home/Home";
import JoinEmployee from "../Pages/EmployeePage/JoinEmployee";
import Login from "../Pages/Login/Login";
import JoinAdmin from "../Pages/JoinAdmin/JoinAdmin";
import MyAssets from "../Pages/NormalEmployee/MyAssets";
import MyTeam from "../Pages/NormalEmployee/MyTeam";
import CustomRequest from "../Pages/NormalEmployee/CustomRequest";
import RequestAssets from "../Pages/NormalEmployee/RequestAssets";
import Profile from "../Pages/NormalEmployee/Profile";
 
  
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
            path:'/joinAdmin',
            element:<JoinAdmin></JoinAdmin>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/myAssets',
            element:<MyAssets></MyAssets>
        },
        {
            path:'/myTeam',
            element:<MyTeam></MyTeam>
        },
        {
            path:'/customRequest',
            element:<CustomRequest></CustomRequest>
        },
        {
            path:'/requestAssets',
            element:<RequestAssets></RequestAssets>
        },
        {
            path:'/profile',
            element:<Profile></Profile>
        },
      ]
    },
   
  ]);

  export default router;