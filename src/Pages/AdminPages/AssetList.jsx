import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AssetList = () => {
     const axiosPublic=useAxiosPublic()
    const [assetList,setAssetList]=useState();
     console.log(assetList)
    useEffect(()=>{
        axiosPublic.get('/adminAddAssets')
        .then(res=>{
            console.log(res.data)
            setAssetList(res.data)
        })

    },[axiosPublic])

    return (
        <div>
            <h2>This is assets list</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */
    
    }
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Product Type</th>
        <th>Product Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        assetList?.map((asset,index)=><tr key={asset._id} className="bg-base-200">
        <th>{index+1}</th>
        <td>{asset.Product_Name}</td>
        <td>{asset.Product_Type}</td>
        <td>{asset.Product_Quantity}</td>
        <td>
           <div className="flex gap-5">
             
           <button className="btn btn-outline">Update</button>
            <button className="btn btn-outline">Delete</button>
           </div>
        
        </td>
        

      </tr>)
      }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AssetList;