

import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";
import axios from "axios";


const Home = () => {
    const {user}=useAuth()
    const [userData,setUserData]=useState([])
    console.log(userData)
  useEffect(()=>{
       axios.get(`http://localhost:5000/user/${user?.email}`)
       .then(res=>{
        
        setUserData(res.data)
       })
    
  },[user?.email])
    return (
        <div>
           
           {
  userData[0]?.role === 'employee' ? (
    // Employee routes go here
    <>
      <h2>This employee home page</h2>
    </>
  ) : userData[0]?.role === 'admin' ? (
    // Admin routes go here
    <>
      <h2>this Admin home page</h2>
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