import {FaGithub, FaGoogle} from "react-icons/fa"


import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    // const axiosPublic =useAxiosPublic()
    const navigate =useNavigate()
    const handleGoogleSignIn=()=>{
        googleSignIn()
       
        .then(res=>{
            console.log(res.user)
            // const userInfo ={
            //     email:res.user?.email,
            //     name:res.user?.displayName
            // }
            // axiosPublic.post('/users',userInfo)
            // .then(res=>{
            //     console.log(res.data)
                
            // })
            navigate('/')
        })
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div className="justify-between flex" >
                
                <button onClick={handleGoogleSignIn} className="btn font-bold">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
                <button onClick={handleGoogleSignIn} className="btn font-bold">
                    <FaGithub className="mr-2"></FaGithub>
                    Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;