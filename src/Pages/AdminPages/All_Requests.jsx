
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const All_Requests = () => {
     const [customData,setCustomData]=useState()

     const axiosPublic =useAxiosPublic()
     useEffect(()=>{
        axiosPublic.get('/EAssetRequest')
      .then(res=>{
        setCustomData(res.data)
      })

     },[axiosPublic])

     const handleDelete = (id) => {
        console.log(id);
      
        axiosPublic.delete(`/ECustomRequest/${id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        .then(response => {
          console.log('Deleted successfully:', response);
          const remaining =customData.filter(item=>item._id !==id)
          setCustomData(remaining)
    
        })
        .catch(error => {
          console.error(error);
        });
      };
    console.log('custom data loaded',customData)

 
  const handleActive = (id) => {
    // Update the status to "Approved" in the database
    axiosPublic.patch(`/EAssetRequest/${id}`, {
      status: "Approved",
    })
      .then(response => {
        console.log(' successfully:', response);

        // Update the status in the local state
        setCustomData(prevData => {
          return prevData.map(item =>
            item._id === id ? { ...item, status: "Approved" } : item
          );
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
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
        <th>Email</th>
        <th>Name</th>
        <th>Request Date</th>
        <th>Simple Note</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        customData?.map((asset,index)=><tr key={asset._id}  className="bg-base-200">
        <th>{index +1}</th>
        <td>{asset.Asset_name}</td>
        <td>{asset.Asset_Type}</td>
        <td>{asset.email}</td>
        <td>{asset.name}</td>
        <td>{asset.data}</td>
        <td>{asset.Additional_information}</td>
        <td>{asset.status}</td>
        
        <td>
           <div className="flex gap-5">  
          
           <button onClick={()=>handleActive(asset._id)} className="btn btn-outline">Approve</button>

            <button onClick={()=>handleDelete(asset._id)} className="btn btn-outline">Reject</button>
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

export default All_Requests;



