import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Add_Assets = () => {
    const axiosPublic =useAxiosPublic()
     
   
    const {
        register,handleSubmit,reset,formState: { errors },} = useForm()
        const navigate =useNavigate()
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const onSubmit= data => {
          console.log(data)
          const customRequest ={
            Product_Name:data.Product_Name, 
            Product_Type:data.Product_Type,
            Product_Quantity:data.Product_Quantity,
            DateAdded: formattedDate

           }
           axiosPublic.post('/adminAddAssets',customRequest)
           .then(res=>{
            if(res.data.insertedId){
              console.log('adminAddAssets added a database')
              reset();
              navigate('/')
            }
           })
         
      }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-5">Add an Assets</h2>
            <div>
            <Helmet>
        <title>Add an Assets</title>
        
      </Helmet>
          <div className="">
  <div className="mx-auto md:w-3/4 lg:w-2/5">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" {...register("Product_Name",{required:true})} name="Product_Name" placeholder="Assets_name" className="input input-bordered"  />
          {errors.Product_Name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" {...register("Product_Quantity",{required:true})} name="Product_Quantity" placeholder="Product_Quantity" className="input input-bordered"  />
          {errors.Product_Quantity && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control w-full ">
       <label className="label">
      <span className="label-text">Product Type</span>
    
    </label>
    <select {...register('Product_Type',{required:true})} className="select  select-bordered w-full ">
    <option disabled selected>Product Type </option>
   <option value="Returnable">Returnable</option>
   <option value="Non-returnable">Non-returnable</option>
  
    </select>
     </div>

        
        <div className="form-control  mt-6">
       
          <input type="submit" value="Add Assets" className="btn btn-primary" />
        </div>
      </form>
      
    </div>
  </div>
</div>  
        </div>
        </div>
    );
};

export default Add_Assets;

// Product Name
// ● Product Type
// ● Product Quantity
// ● Add Button