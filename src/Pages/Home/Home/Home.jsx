
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import AllpendingRequest from "./AllpendingRequest";
import AdminHome from "./AdminHome";



const Home = () => {
    const {user}=useAuth()
    const [userData,setUserData]=useState()
    const axiosPublic=useAxiosPublic()
    console.log(userData)
   useEffect(()=>{
    axiosPublic.get(`/user/${user?.email}`)
       .then(res=>{
        
        setUserData(res.data)
       })
    
  },[axiosPublic,user?.email])
    return (
        <div>
           
           {
  userData?.role === 'employee' ? (
    // Employee routes go here
    <>
      <h2>This employee home page</h2>
      <AllpendingRequest></AllpendingRequest>
     
    </>
  ) : userData?.role === 'admin' ? (
    // Admin routes go here
    <>
      <h2>this Admin home page</h2>
      <AdminHome></AdminHome>
    </>
  ) : (
    // Default routes or error handling go here
    <>
      <Banner></Banner>
        <Packages></Packages>
        <About></About>
        <Footer></Footer>
    </>
  )
}
      
           
          
        
        </div>
    );
};

export default Home;

{/* <Banner></Banner>
        <Packages></Packages>
        <About></About>
        <Footer></Footer> */}