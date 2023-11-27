import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";


const CustomRequest = () => {
    const axiosPublic =useAxiosPublic()
     const {user}=useAuth()
   
    const {
        register,handleSubmit,reset,formState: { errors },} = useForm()
        const navigate =useNavigate()
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const onSubmit= data => {
          console.log(data)
          const customRequest ={
            Assets_name:data.Assets_name,
            photo:data.photo,
            Price:data.Price,
            category:data.category,
            whyNeed:data.whyNeed,
            Additional_information:data.Additional_information,
            email:user?.email,
            name:user?.displayName,
            DateAdded: formattedDate,
            status:'pending'
            
           }
           axiosPublic.post('/ECustomRequest',customRequest)
           .then(res=>{
            if(res.data.insertedId){
              console.log('ECustomRequest added a database')
              reset();
                navigate('/')
            }
           })
         
      }
    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-5">Make Your custom Request</h2>
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
            <span className="label-text">Assets Name</span>
          </label>
          <input type="text" {...register("Assets_name",{required:true})} name="Assets_name" placeholder="Assets_name" className="input input-bordered"  />
          {errors.Assets_name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" {...register("Price",{required:true})} name="Price" placeholder="Price" className="input input-bordered"  />
          {errors.Price && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control w-full ">
       <label className="label">
      <span className="label-text">Category</span>
    
    </label>
    <select {...register('category',{required:true})} className="select  select-bordered w-full ">
    <option disabled selected>Assets type </option>
   <option value="Returnable">Returnable</option>
   <option value="Non-returnable">Non-returnable</option>
  
    </select>
     </div>

    <div className="form-control">
        <label className="label">
     <span className="label-text">Assert Image</span>
         </label>
    <input type="text" {...register("photo",{required:true})}  placeholder="photo  url" className="input input-bordered"  />
    {errors.photo && <span className="text-red-600">Picture dow mama</span>}
    </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Why you need this</span>
          </label>
          <input type="text" {...register("whyNeed",{required:true})} name="whyNeed" placeholder="Why you need this" className="input input-bordered"  />
          {errors.whyNeed && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Additional information</span>
          </label>
          <input type="text" {...register("Additional_information",{required:true})} name="Additional_information" placeholder="Additional information" className="input input-bordered"  />
          {errors.Additional_information && <span className="text-red-600">This field is required</span>}
        </div>
        
        <div className="form-control  mt-6">
       
          <input type="submit" value="Request" className="btn btn-primary" />
        </div>
      </form>
      
    </div>
  </div>
</div>  
        </div>
        </div>
    );
};

export default CustomRequest;<h2>Make a custom Request</h2>