
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Navbar = () => {
  const { user, loginOut } = useAuth()
  const [userData, setUserData] = useState('') ||''
  const axiosPublic =useAxiosPublic()
  console.log(userData)
  useEffect(() => {
    axiosPublic.get(`/user/${user?.email}`)
      .then(res => {

        setUserData(res.data)
      })

  }, [axiosPublic,setUserData,user?.email])

  const handleLogOut = () => {
    loginOut()
      .then()
      .catch()
  }
  const navLinks = <>
    {
      userData?.role === 'employee' ? (
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
      ) : userData?.role === 'admin' ? (
        // Admin routes go here
        <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/myEmployeeList">My Employee List</NavLink></li>
          <li><NavLink to="/addEmployee">Add an Employee</NavLink></li>
          <li><NavLink to="/addAssets">Add an Assets</NavLink></li>
          <li><NavLink to="/assetList">Asset List</NavLink></li>
          <li><NavLink to="/allRequests">All Requests</NavLink></li>
          <li><NavLink to="/customRequestList">Custom Request List</NavLink></li>

          <li><NavLink to="/Profile">Profile</NavLink></li>
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
          <p className="py-5">{user?.displayName}</p>

          <label tabIndex={0} className="ml-5 ">
            <div >
              <div className="w-[30px] py-3 rounded-full ">
                <img src={userData?.photo} alt="" />
              </div>
            </div>
          </label>

        </div>
      </div>
    </div>
  );
};

export default Navbar;