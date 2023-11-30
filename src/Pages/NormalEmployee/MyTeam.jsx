// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../hooks/useAuth";
// import useAxiosPublic from "../../hooks/useAxiosPublic";


// const MyTeam = () => {
//     const {user}=useAuth()
//     const axiosPublic =useAxiosPublic()
//      const {
//          data: myTeam,
//          isLoading,
//          refetch,
//        } = useQuery({
//          queryKey: ["myTeam"],
//          queryFn: async () => {
//            const res = await axiosPublic.get(
//              `/admin/users/list/${user?.email}`
//            );
//            return res.data;
//          },
//        });
//  console.log('Our Team member',myTeam)
//     return (
//         <div>
//             <h2 className="text-2xl font-bold text-center">Our Team</h2>
//             <div className="px-10">
//             <div className="overflow-x-auto">
//   <table className="table">
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Name of the member</th>
//         <th>Profile of the member</th>
//         <th>Member Type</th>
       
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       {
//         myTeam?.map((team,index)=><tr key={team._id}  className="bg-base-200">
//         <th>{index +1}</th>
//         <td>{team.name}</td>
//         <td><img className="w-[50px]" src={team.photo} alt="" /></td>
//         <td>{team.role}</td>
        
        
//         <td>
//            <div className="flex gap-5">  
          
//            <button className="btn btn-outline">Remove From Team</button>
//            </div>
        
//         </td>
        

//       </tr>)
//       }
     
      
//     </tbody>
//   </table>
// </div>
//         </div>
//         </div>
//     );
// };

// export default MyTeam;


import React, { useState, useEffect } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const EventCard = ({ member }) => {
  const { name, dateOfBirth, remainingDays, photo } = member;

  return (
    <div className="event-card">
      <img className='w-56' src={photo} alt={name} />
      <p>Name: {name}</p>
      <p>Date of Birth: {dateOfBirth}</p>
      {remainingDays >= 0 ? (
        <p>Remaining Days: {remainingDays}</p>
      ) : (
        <p>Birthday has passed</p>
      )}
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  const { name, image, role, photo, Birthday } = member;

  return (
   <div>
     <div className="flex gap-2 py-2 team-member-card">
       <div>
         <img className='rounded-xl w-44' src={photo} alt={name} />
       </div>
       <div>
         <p className='text-green-600'>Name: {name}</p>
         <p className='text-green-600'>Date of Birth: {Birthday}</p>
         <p className='text-green-600'>Role: {role}</p>
         <p className='text-green-600'>Member Type: {role === 'admin' ? 'Admin' : 'Normal Employee'}</p>
       </div>
     </div>
   </div>
  );
};

const MyTeam = () => {
  const [members, setMembers] = useState([]);
   const axiosPublic =useAxiosPublic()

   useEffect(() => {
    
        axiosPublic.get('/users')
        .then(res=>{
          setMembers(res.data)
        })
     
      
  }, [axiosPublic]);

  const calculateRemainingDays = (dateOfBirth) => {
    const today = new Date();
    const birthday = new Date(dateOfBirth);
    birthday.setFullYear(today.getFullYear());

    const diffTime = birthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };

  const upcomingEvents = members
    .filter((member) => {
      const remainingDays = calculateRemainingDays(member.dateOfBirth);
      return remainingDays >= -30 && remainingDays <= 30;
    })
    .map((member) => (
      <EventCard key={member._id} member={{ ...member, remainingDays: calculateRemainingDays(member.dateOfBirth) }} />
    ));

  const teamMembers = members.map((member) => (
    <TeamMemberCard key={member._id} member={member} />
  ));

  return (
    <div className="app">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className='text-2xl font-bold py-2 text-orange-700'>Upcoming Events</h2>
          <div className="event-container">
            {upcomingEvents.length > 0 ? upcomingEvents : <p>No upcoming events</p>}
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className='text-2xl font-bold py-2 text-orange-700'>Team Member List</h2>
          <div className="team-member-container">
            {teamMembers.length > 0 ? teamMembers : <p>No team members</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
