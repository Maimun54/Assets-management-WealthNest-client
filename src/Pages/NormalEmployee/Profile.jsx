
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Profile = () => {
    const {user,loginOut}=useAuth()
    const [userData,setUserData]=useState([])
    
    console.log('update profile',userData)
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
    return (
        <div className="text-center">
         <div className="grid place-items-center h-screen">
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
    </div>
        </div>
    );
};

export default Profile;

// Logged in User name and Profile Picture
// ● Logout Button