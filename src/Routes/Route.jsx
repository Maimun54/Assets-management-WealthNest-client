import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Layout from "../MainLayout/Layout";

import Home from "../Pages/Home/Home/Home";
import JoinEmployee from "../Pages/EmployeePage/JoinEmployee";
import Login from "../Pages/Login/Login";
import JoinAdmin from "../Pages/JoinAdmin/JoinAdmin";
import MyAssets from "../Pages/NormalEmployee/MyAssets";
import MyTeam from "../Pages/NormalEmployee/MyTeam";
import CustomRequest from "../Pages/NormalEmployee/CustomRequest";
import RequestAssets from "../Pages/NormalEmployee/RequestAssets";
import Profile from "../Pages/NormalEmployee/Profile";
import Add_Assets from "../Pages/AdminPages/Add_Assets";
import AssetList from "../Pages/AdminPages/AssetList";
import Add_AnEmployee from "../Pages/AdminPages/Add_AnEmployee";
import Custom_RequestsList from "../Pages/AdminPages/Custom_RequestsList";
import MyEmployeeList from "../Pages/AdminPages/MyEmployeeList";
import AdminProfile from "../Pages/AdminPages/AdminProfile";
import All_Requests from "../Pages/AdminPages/All_Requests";
 
  
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
        //admin route
        {
            path:'/addAnEmployee',
            element:<Add_AnEmployee></Add_AnEmployee>
        },
        {
            path:'/addAssets',
            element:<Add_Assets></Add_Assets>
        },
        {
            path:'/adminProfile',
            element:<AdminProfile></AdminProfile>
        },
        {
            path:'/assetsList',
            element:<AssetList></AssetList>
        },
        {
            path:'/allRequests',
            element:<All_Requests></All_Requests>
        },
        
        {
            path:'/customRequestList',
            element:<Custom_RequestsList></Custom_RequestsList>
        },
        {
            path:'/myEmployeeList',
            element:<MyEmployeeList></MyEmployeeList>
        },
        
      ]
    },
   
  ]);

  export default router;