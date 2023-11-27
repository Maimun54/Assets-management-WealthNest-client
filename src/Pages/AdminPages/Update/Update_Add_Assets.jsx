
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update_Add_Assets = () => {
    
     const updateAssets =useLoaderData()
    console.log(updateAssets)
    const {
        register,handleSubmit,formState: { errors },} = useForm()
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const onSubmit= data => {
          console.log(data)
          const updateRequest ={
            Product_Name:data.Product_Name, 
            Product_Type:data.Product_Type,
            Product_Quantity:data.Product_Quantity,
            DateAdded: formattedDate

           }
           fetch(`http://localhost:5000/adminAddAssets/${updateAssets._id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(updateRequest)
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
            <h2>This is update page :{updateAssets.length}</h2>
            <div>
            <h2 className="text-4xl font-bold text-center py-5">This is update page</h2>
            <div>
            <Helmet>
        <title>This is update page</title>
        
      </Helmet>
          <div className="">
  <div className="mx-auto md:w-3/4 lg:w-2/5">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input defaultValue={updateAssets.Product_Name} type="text" {...register("Product_Name",{required:true})} name="Product_Name" placeholder="Assets_name" className="input input-bordered"  />
          {errors.Product_Name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input defaultValue={updateAssets.Product_Quantity} type="text" {...register("Product_Quantity",{required:true})} name="Product_Quantity" placeholder="Product_Quantity" className="input input-bordered"  />
          {errors.Product_Quantity && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control w-full ">
       <label className="label">
      <span className="label-text">Product Type</span>
    
    </label>
    <select defaultValue={updateAssets.Product_Type} {...register('Product_Type',{required:true})} className="select  select-bordered w-full ">
    <option disabled selected>Product Type </option>
   <option value="Returnable">Returnable</option>
   <option value="Non-returnable">Non-returnable</option>
  
    </select>
     </div>

        
        <div className="form-control  mt-6">
       
          <input type="submit" value="Update Assets" className="btn btn-primary" />
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

export default Update_Add_Assets;
// /assetList/:id