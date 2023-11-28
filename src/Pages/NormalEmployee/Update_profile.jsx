
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update_profile = () => {
    
     const updateProfile =useLoaderData()
    console.log("Update profile",updateProfile)
    const {
        register,handleSubmit,formState: { errors },} = useForm()
        
        const onSubmit= data => {
          console.log(data)
          const updateProfile ={
            name:data.name, 
            photo:data.photo, 
            Birthday:data.Birthday, 
           

           }
           fetch(`http://localhost:5000/adminAddAssets/${users._id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(updateProfile)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            }
        }) 
         
      }
    
    return (
        <div>
       
            <div>
            <h2 className="text-4xl font-bold text-center py-5">This is update Profile Page</h2>
            <div>
            <Helmet>
        <title>This is update Profile Page</title>
        
      </Helmet>
          <div className="">
  <div className="mx-auto md:w-3/4 lg:w-2/5">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input defaultValue={updateProfile.name} type="text" {...register("name",{required:true})} name="name" placeholder="name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
         <span className="label-text">Profile</span>
          </label>
          <input defaultValue={updateProfile.photo} type="text" {...register("photo",{required:true})}  placeholder="photo  url" className="input input-bordered"  />
          {errors.photo && <span className="text-red-600">Tomar Picture dow mama</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Birthday</span>
          </label>
          <input defaultValue={updateProfile.Birthday} type="date" {...register("Birthday",{required:true})}  placeholder="Birthday" className="input input-bordered"  />
          {errors.Birthday && <span className="text-red-600">Select your Date of birth</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input defaultValue={updateProfile.email} type="email" {...register("email",{required:true})} name="email" placeholder="email" className="input input-bordered"/>
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>

        
        <div className="form-control  mt-6">
       
          <input type="submit" value="Update Profile" className="btn btn-primary" />
        </div>
      </form>
      
    </div>
  </div>
</div>  
        </div>
        </div>
        </div>
    );
};

export default Update_profile;
// /assetList/:id