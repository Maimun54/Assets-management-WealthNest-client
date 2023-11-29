
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {
    const {user,loginOut}=useAuth()
    const [userData,setUserData]=useState([])
    const navigate =useNavigate()
    console.log('update profile',userData)
  useEffect(()=>{
       axios.get(`http://localhost:5000/user/${user?.email}`)
       .then(res=>{
        
        setUserData(res.data)
       })
    
  },[user?.email])
   
    const handleLogOut=()=>{
        loginOut()
        .then(()=>{
          navigate('/')
        })
        .catch()
      }
    return (
        <div className="grid place-items-center h-screen">
         {/* <div className="grid place-items-center h-screen">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img src={userData[0]?.photo} alt="User Profile" className="w-20 h-20 rounded-full" />
          <p className="text-gray-700 font-bold">Name : {userData[0]?.name}</p>
        </div>
        <button
          onClick={handleLogOut}
          className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600 focus:outline-none"
        >
          Logout
        </button>
        <Link to={`/updateProfile/${userData[0]?._id}`}>
        <button
          
          className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600 focus:outline-none"
        >
          Update Profile
        </button>
        </Link>
      </div>
    </div> */}

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={userData[0]?.photo} alt="Profile" className="w-[100px] rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name : {userData[0]?.name}</h2>
    <h2 className="card-title">Email : {userData[0]?.email}</h2>
    <h2 className="card-title">Birthday : {userData[0]?.Birthday}</h2>
    
    <div className="card-actions">
    <Link to={`/updateProfile/${userData[0]?._id}`}>
        <button
          
          className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600 focus:outline-none"
        >
          Update Profile
        </button>
        </Link>
        <button
          onClick={handleLogOut}
          className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600 focus:outline-none"
        >
          Logout
        </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;

// Logged in User name and Profile Picture
// ● Logout Button