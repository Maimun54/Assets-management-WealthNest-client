/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// import Packages from '../pages/Home/Home/Packages';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AdminHome = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
   const axiosPublic =useAxiosPublic()
   console.log("all request data",allData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get('/EAssetRequest');
        setAllData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosPublic]);

  const pendingRequests = allData.filter((request) => request.status === 'pending').slice(0, 5);
   console.log('pending data',pendingRequests)
  const productFrequency = {};
  allData.forEach((request) => {
    const { productName } = request;
    productFrequency[productName] = (productFrequency[productName] || 0) + 1;
  });

  const topRequestedItems = Object.keys(productFrequency).sort(
    (a, b) => productFrequency[b] - productFrequency[a]
  ).slice(0, 4);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          
          <div className="overflow-x-auto">
            <h2 className='text-4xl text-center font-bold text-red-600'>Pending Requests</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Asset Type</th>
                  <th>Email of Requester</th>
                  <th>Name of Requester</th>
                  <th>Request Date</th>
                  <th>Additional Note</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests?.map((request, index) => (
                  <tr key={request._id}>
                    <th>{index + 1}</th>
                    <td>{request.Asset_name}</td>
                    <td>{request.Asset_Type}</td>
                    <td>{request.email}</td>
                    <td>{request.name}</td>
                    <td>{request.data}</td>
                    <td>{request.note}</td>
                    <td>{request.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

         
          <div className="w-[500px]">
            <h2 className='text-4xl text-center font-bold text-red-600'>Top Most Requested Items</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Request Count</th>
                </tr>
              </thead>
              <tbody>
                {topRequestedItems.map((productName, index) => (
                  <tr key={index}>
                    <td>{productName}</td>
                    <td>{productFrequency[productName]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}


      <div>
       
      </div>
    </div>
  );
};

export default AdminHome;