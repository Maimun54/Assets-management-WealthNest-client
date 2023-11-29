
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import SocialLogin from "../../Components/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";


    const JoinEmployee = () => {
      const axiosPublic =useAxiosPublic()
     
    const {createUser,updateUserProfile}=useAuth()
    const role ='employee'
   
    const {
        register,handleSubmit,reset,formState: { errors },} = useForm()
        const navigate =useNavigate()
        
        const onSubmit= data => {
          console.log(data)
          createUser(data.email,data.password)
          .then(res=>{
              console.log(res.user)
              updateUserProfile(data.name,data.photoURL)
              .then(()=>{
                 //create user entry in the database
                 const userInfo ={
                  name:data.name,
                  email:data.email,
                  photo:data.photo,
                  Birthday:data.Birthday,
                  role:role,
                  haveEmployed:null
                 }
                 axiosPublic.post('/users',userInfo,role)
                 .then(res=>{
                  if(res.data.insertedId){
                    console.log('user added a database')
                    reset();
                      navigate('/')
                  }
                 })
                  // console.log('user profile updated')
                  
                    
              })
              .catch(error=>console.log(error))
          })
      }
    return (
        <div>
           <div>
            <Helmet>
        <title>Join As Employee</title>
        
      </Helmet>
          <div className="">
  <div className="mx-auto md:w-3/4 lg:w-2/5">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name",{required:true})} name="name" placeholder="name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
         <span className="label-text">Profile</span>
          </label>
          <input type="text" {...register("photo",{required:true})}  placeholder="photo  url" className="input input-bordered"  />
          {errors.photo && <span className="text-red-600">Tomar Picture dow mama</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Birthday</span>
          </label>
          <input type="date" {...register("Birthday",{required:true})}  placeholder="Birthday" className="input input-bordered"  />
          {errors.Birthday && <span className="text-red-600">Select your Date of birth</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{required:true})} name="email" placeholder="email" className="input input-bordered"/>
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{required:true,
          maxLength:20,minLength:6,
          pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})} name="password" placeholder="password" className="input input-bordered"  />
          {errors.password && <span className="text-red-600">This field is required</span>}
          {errors.password?.type==='minLength' && <span className="text-red-600">password must be 6 character</span>}
          {errors.password?.type==='maxLength' && <span className="text-red-600">Password less than 20 character</span>}
          {errors.password?.type==='pattern' && <span className="text-red-600">Password have one uppercase one lower case one number and one special  character</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control  mt-6">
       
          <input type="submit" value="SignUP" className="btn btn-primary" />
        </div>
      </form>
      <div className="p-5">
        <h2 className="text-center">Already Joined as a Employee <span className="font-bold"><Link to='/login'>Login</Link></span></h2>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>  
        </div> 
        </div>
    );
};

export default JoinEmployee;