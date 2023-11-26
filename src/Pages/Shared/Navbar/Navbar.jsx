
// import { useContext } from "react";
import {NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";

import axios from "axios";
// import { AuthContext } from "../../Provider/AuthProvide";

const Navbar = () => {
  const {user,loginOut}=useAuth()
    const [userData,setUserData]=useState([])
    console.log(userData)
  useEffect(()=>{
       axios.get(`http://localhost:5000/user/${user?.email}`)
       .then(res=>{
        
        setUserData(res.data)
       })
    
  },[user?.email])
  
  const handleLogOut=()=>{
    loginOut()
    .then()
    .catch()
  }
    const navLinks =<>
        {
  userData[0]?.role === 'employee' ? (
    // Employee routes go here
    <>
      <li><NavLink to="/">Home</NavLink></li> 
      <li><NavLink to="/myAssets">My Assets</NavLink></li>
      <li><NavLink to="/myTeam">My Team</NavLink></li>
      <li><NavLink to="/customRequest">Make a Custom Request</NavLink></li>
      <li><NavLink to="/requestAssets">Request for an Assets</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><button onClick={handleLogOut}>Sign Out</button></li>
    </>
  ) : userData[0]?.role === 'admin' ? (
    // Admin routes go here
    <>
      <li><NavLink to="/">Home</NavLink></li> 
      <li><NavLink to="/addEmployee">Add an Employee</NavLink></li>
      <li><NavLink to="/addAssets">Add Assets</NavLink></li>
      <li><NavLink to="/allRequests">All Requests</NavLink></li>
      <li><NavLink to="/assetList">AssetList</NavLink></li>
      <li><NavLink to="/adminProfile">Profile</NavLink></li>
      <li><button onClick={handleLogOut}>Sign Out</button></li>
    </>
  ) : (
    // Default routes or error handling go here
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/joinEmployee">Join as Employee</NavLink></li>
      <li><NavLink to="/joinAdmin">Join as Admin</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </>
  )
}
        
    </>

  
  
    return (
      
        <div >
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="https://i.ibb.co/LxV5kmC/rsz-seth-blum-optimized.jpg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">WealthNest
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">
        {/* <p>{user?.displayName}</p> */}
         
       <label tabIndex={0} className=" ">
       {/* <div >
        <div className="w-16  rounded-full ">
         <img src={user?.photoURL} alt="" />
        </div>
        </div> */}
      </label>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;