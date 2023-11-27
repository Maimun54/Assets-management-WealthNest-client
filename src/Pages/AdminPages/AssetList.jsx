import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


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

const handleDelete = (id) => {
    console.log(id);
  
    axiosPublic.delete(`/adminAddAssets/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json', 
      },
    })
    .then(response => {
      console.log('Deleted successfully:', response);
      const remaining =assetList.filter(item=>item._id !==id)
      setAssetList(remaining)

    })
    .catch(error => {
      console.error(error);
    });
  };
    return (
        <div className="px-10">
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Product Type</th>
        <th>Product Quantity</th>
        <th>Added Date</th>
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
        <td>{asset.DateAdded}</td>
        <td>
           <div className="flex gap-5">  
           <Link to={`/updateAsset/${asset._id}`}><button className="btn btn-outline">Update</button></Link>
            <button onClick={()=>handleDelete(asset._id)} className="btn btn-outline">Delete</button>
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