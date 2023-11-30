import { useEffect } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";



const AllpendingRequest = () => {
        const [pending,setPending]=useState()
    const axiosPublic =useAxiosPublic()
    useEffect(()=>{
        axiosPublic.get('/ECustomRequest/pending')
        .then(res=>{
            console.log(res.data)
        setPending(res.data)

        })
    },[axiosPublic])
    console.log('employee pending tata ',pending)
    return (
        <div>
            <h2 className="text-3xl font-bold">My pending requests</h2>
            <div className="px-10">
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Assets Name</th>
        <th>Asset Type</th>
        <th>Email</th>
        <th>Name</th>
        <th>Request Date</th>
        <th>Simple Note</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        pending?.map((asset,index)=><tr key={asset._id}  className="bg-base-200">
        <th>{index +1}</th>
        <td>{asset.Assets_name}</td>
        <td>{asset.Assets_Type}</td>
        <td>{asset.email}</td>
        <td>{asset.name}</td>
        <td>{asset.DateAdded}</td>
        <td>{asset.note}</td>
        <td>{asset.status}</td>
        
        <td>
           <div className="flex gap-5">  
          
       
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

export default AllpendingRequest;