import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const RequestAssets = () => {

  const [assetsList,setAssetsList]=useState();
  useEffect(()=>{
    axios.get('http://localhost:5000/adminAddAssets')
    .then(res=>{
      setAssetsList(res.data)
    })
  },[])
  const {user}=useAuth()
  const handleRequest =(asset)=>{
    console.log()
       const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const RequestAssets ={
             data:formattedDate,
             Asset_name:asset.Product_Name,
             Asset_Type:asset.Product_Type,
             email:user?.email,
             name:user?.displayName,
             status:'pending'
        }

    axios.post('http://localhost:5000/EAssetRequest',RequestAssets)
    .then(res=>{
      console.log(res.data)
    })
  }
  console.log(assetsList)
    return (
        <div>
            <h2></h2>
            <div>
            <h2 className="text-2xl text-center">Request for an assets</h2>
            <div className="px-10">
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Assets Name</th>
        <th>Asset Type</th>
        <th>Availability</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
     {
      assetsList?.map((asset,i)=><tr key={asset._id} className="bg-base-200">
      <th>{i +1}</th>
      <td>{asset.Product_Name}</td>
      <td>{asset.Product_Type}</td>
      <td>{asset.Product_Quantity > 0 ? "Available" : "Out of stock"}</td>
    
      
      <td>
         <div className="flex gap-5">  
      <button onClick={()=>handleRequest(asset)} disabled={asset.Product_Quantity <= 0} className="btn btn-outline">Request</button>    
         </div>
      
      </td>
      

    </tr>)
     }
      
    </tbody>
  </table>
</div>
        </div>
        </div>
        </div>
    );
};

export default RequestAssets;