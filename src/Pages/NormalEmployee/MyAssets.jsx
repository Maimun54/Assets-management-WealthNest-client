import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const MyAssets = () => {
    const [customData,setCustomData]=useState()

    const axiosPublic =useAxiosPublic()
    useEffect(()=>{
       axiosPublic.get('/EAssetRequest')
     .then(res=>{
       setCustomData(res.data)
     })

    },[axiosPublic])

   
   console.log('custom data loaded',customData)
    return (
        <div>
            <h2 className="text-2xl text-center">This is all Assets Request by Employee</h2>
            <div className="px-10">
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Assets Name</th>
        <th>Asset Type</th>
        <th>Request Date</th>
        <th>Approved Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        customData?.map((myAsset,index)=><tr key={myAsset._id}  className="bg-base-200">
        <th>{index +1}</th>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
        
        
        <td>
           <div className="flex gap-5">  
          
           <button className="btn btn-outline">Cancel
      Request</button>

           
           </div>
        
        </td>
        

      </tr>)
      }
     
      
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default MyAssets;

// Asset Name
// ● Asset Type
// ● Request Date
// ● Approval Date
// ● Request Status
// ● Action (Explanation is Bellow)