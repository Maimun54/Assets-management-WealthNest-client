import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const RequestAssets = () => {

  const [assetsList,setAssetsList]=useState();
  const [note,setNote]=useState()
  const axiosPublic=useAxiosPublic()
  useEffect(()=>{
    axiosPublic.get('/adminAddAssets')
    .then(res=>{
      setAssetsList(res.data)
    })
  },[axiosPublic])
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
             status:'pending',
             note:note
            
        }

        axiosPublic.post('/EAssetRequest',RequestAssets)
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
      <button
             className="btn"
           onClick={() =>
 document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Request Asset
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Additional Notes</h3>

                      <textarea
                        name="note"
                        type="note"
                        className="textarea textarea-primary"
                        placeholder="Additional Notes"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      ></textarea>
                      <div className="modal-action">
                        <form method="dialog">
                          <button
                            className="btn btn-sm bg-green-500 text-black"
                            onClick={() =>
                              document.getElementById("my_modal_1").close()
                            }
                          >
                            Close
                          </button>
                          <button
                          disabled={asset.Product_Quantity <= 0}
                            onClick={() => handleRequest(asset)}
                            className="btn btn-sm btn-primary ml-4"
                          >
                            Submit Request
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
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

