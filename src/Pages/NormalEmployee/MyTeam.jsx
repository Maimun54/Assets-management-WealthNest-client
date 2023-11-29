import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const MyTeam = () => {
    const {user}=useAuth()
    const axiosPublic =useAxiosPublic()
     const {
         data: myTeam,
         isLoading,
         refetch,
       } = useQuery({
         queryKey: ["myTeam"],
         queryFn: async () => {
           const res = await axiosPublic.get(
             `/admin/users/list/${user?.email}`
           );
           return res.data;
         },
       });
 console.log('Our Team member',myTeam)
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Our Team</h2>
            <div className="px-10">
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name of the member</th>
        <th>Profile of the member</th>
        <th>Member Type</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myTeam?.map((team,index)=><tr key={team._id}  className="bg-base-200">
        <th>{index +1}</th>
        <td>{team.name}</td>
        <td><img className="w-[50px]" src={team.photo} alt="" /></td>
        <td>{team.role}</td>
        
        
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

export default MyTeam;