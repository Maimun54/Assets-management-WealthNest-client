import SocialLogin from "../../Components/SocialLogin";

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const JoinAdmin = () => {
    const {createUser}=useContext(AuthContext)

    const {
        register,handleSubmit,reset,formState: { errors },} = useForm()

        const onSubmit= data => {
            console.log(data)
            createUser(data.email,data.password)
            reset()
        }
    return (
        <div>
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
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" {...register("name",{required:true})} name="name" placeholder="name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input type="text" {...register("Company-name",{required:true})} name="Company-name" placeholder="Company Name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
         <span className="label-text">Company logo</span>
          </label>
          <input type="text" {...register("photo",{required:true})}  placeholder="Logo  url" className="input input-bordered"  />
          {errors.photo && <span className="text-red-600">Tomar Picture dow mama</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Birthday</span>
          </label>
          <input type="date" {...register("Birthday",{required:true})}  placeholder="Birthday" className="input input-bordered"  />
          {errors.Birthday && <span className="text-red-600">Select your Date of birth</span>}
        </div>
        <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Category</span>
    
  </label>
  <select {...register('category',{required:true})} className="select select-bordered w-full ">
  <option disabled selected>Select your package </option>
  <option value="5 Members for $5">5 Members for $5</option>
  <option value="10 Members for $8">10 Members for $8</option>
  <option value="20 Members for $15">20 Members for $15</option>
  </select>
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
        <h2 className="text-center">Already Joined as a Admin <span className="font-bold"><Link to='/login'>Login</Link></span></h2>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>  
        </div> 
        </div> 
        </div>
    );
};

export default JoinAdmin;