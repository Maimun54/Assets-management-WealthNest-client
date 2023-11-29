import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";


const Add_AnEmployee = () => {
    // const {user}=useAuth()
    const [employeeData,setEmployeeData]=useState()
     const {user}=useAuth()
     const axiosPublic =useAxiosPublic()
     useEffect(()=>{
        axiosPublic.get('/admin/users')
      .then(res=>{
        setEmployeeData(res.data)
      })

     },[axiosPublic])


    console.log('employee null data',employeeData)

    const handleAdded = (id) => {
        // Update the status to "Approved" in the database
        axiosPublic.patch(`/admin/users/${id}`, {
          status:user?.email
        })
          .then(response => {
            console.log(' successfully:', response);
            const remaining =employeeData.filter(item=>item._id !==id)
            setEmployeeData(remaining);
          })
          .catch(error => {
            console.error(error);
          });
      };

    return (
        <div>
            <h2 className="text-2xl text-center">This is Add An Employee</h2>
            <div className="px-10">
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Profile</th>
        <th>Type</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        employeeData?.map((employee,index)=><tr key={employee._id}  className="bg-base-200">
        <th>{index +1}</th>
        <td>{employee?.name}</td>
        <td><img className="w-[50px] h-[50px]" src={employee?.photo} alt="" /></td>
        <td>{employee?.role}</td>
        
        
        <td>
           <div className="flex gap-5">  
           
           <button  onClick={()=>handleAdded(employee._id)}  className="btn btn-outline">Add to Team</button>
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


export default Add_AnEmployee;