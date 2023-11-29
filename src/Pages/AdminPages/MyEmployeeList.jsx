import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";


const MyEmployeeList = () => {
   const {user}=useAuth()
   const axiosPublic =useAxiosPublic()
    const {
        data: myEmployeeList,
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["myEmployeeList"],
        queryFn: async () => {
          const res = await axiosPublic.get(
            `/admin/users/list/${user?.email}`
          );
          return res.data;
        },
      });
console.log(myEmployeeList)
    

 

    return (
        <div>
            <h2 className="text-2xl text-center">This is Add An Employee</h2>
            <div className="px-10">
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name of the member</th>
        <th>Profile of the member</th>
        <th>Member Type</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myEmployeeList?.map((employee,index)=><tr key={employee._id}  className="bg-base-200">
        <th>{index +1}</th>
        <td>{employee.name}</td>
        <td><img className="w-[50px]" src={employee.photo} alt="" /></td>
        <td>{employee.role}</td>
        
        
        <td>
           <div className="flex gap-5">  
          
           <button className="btn btn-outline">Remove From Team</button>
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

export default MyEmployeeList;