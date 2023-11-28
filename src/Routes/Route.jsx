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
import PrivateRoute from "./PrivateRoute";
import Update_Add_Assets from "../Pages/AdminPages/Update/Update_Add_Assets";
import Update_profile from "../Pages/NormalEmployee/Update_profile";
 
  
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
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        //admin route
        {
            path:'/addEmployee',
            element:<PrivateRoute><Add_AnEmployee></Add_AnEmployee></PrivateRoute>
        },
        {
            path:'/addAssets',
            element:<PrivateRoute><Add_Assets></Add_Assets></PrivateRoute>
        },
        {
            path:'/adminProfile',
            element:<PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
        },
        {
            path:'/assetList',
            element:<PrivateRoute><AssetList></AssetList></PrivateRoute>
        },
        {
            path:'updateAsset/:id',
            element:<PrivateRoute><Update_Add_Assets></Update_Add_Assets></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/adminAddAssets/${params.id}`)
        },
        {
            path:'updateProfile/:id',
            element:<PrivateRoute><Update_profile></Update_profile></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
        },
        {
            path:'/allRequests',
            element:<PrivateRoute><All_Requests></All_Requests></PrivateRoute>
        },
        
        {
            path:'/customRequestList',
            element:<PrivateRoute><Custom_RequestsList></Custom_RequestsList></PrivateRoute>
        },
        {
            path:'/myEmployeeList',
            element:<PrivateRoute><MyEmployeeList></MyEmployeeList></PrivateRoute>
        },
        
      ]
    },
   
  ]);

  export default router;